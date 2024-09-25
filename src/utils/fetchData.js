const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export default fetchData;
