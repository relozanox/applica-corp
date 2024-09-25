import { Router } from "express";
import createPosts from "../controllers/posts.controller.js";

const router = new Router();

router.get('/posts', createPosts);

export default router;
