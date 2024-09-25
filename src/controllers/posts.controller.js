import fetchData from "../utils/fetchData.js";

const createPosts = async(req, res)=>{
    const { start = 0, size = 10 } = req.query;
    
    try {
        const posts = await fetchData(`${process.env.API_URL}/posts`);
        const users = await fetchData(`${process.env.API_URL}/users`);

        const paginatedPosts = posts.slice(Number(start), Number(start) + Number(size));

        if (paginatedPosts.length === 0) {
            return res.status(404).json({ message: 'No blog posts found' });
        }
        
        const postsWithDetails = await Promise.all(paginatedPosts.map(async (post) => {
            const user = users.find(u => u.id === post.userId);

            const comments = await fetchData(`${process.env.API_URL}/posts/${post.id}/comments`);

            return {
                ...post,
                user,
                comments: comments.length ? comments : []
            };
        }));
        
        res.status(200).json(postsWithDetails);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default createPosts;
