import express from "express";
import authRoute from "./authRoutes.js";

const router = express.router();

router.use("/auth", authRoute);  //auth/register

export default router;