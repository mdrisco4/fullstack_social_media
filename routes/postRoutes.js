import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { 
        createPost, 
        getPost, 
        getPosts, 
        getUserPost
    } from "../controllers/postController.js";

const router = express.Router();

// CREATE POST
router.post('/create-post', userAuth, createPost);
// GET POST
router.post("/", userAuth, getPosts);
router.post("/:id", userAuth, getPost);

router.post("/get-user-post/:id", userAuth, getUserPost)

export default router;