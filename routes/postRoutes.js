import express from "express";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE POST
router.post('/create-post', userAuth, createPost)

export default router;