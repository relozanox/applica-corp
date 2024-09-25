import express from 'express';
import postsRoutes from './routes/post.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/', postsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});