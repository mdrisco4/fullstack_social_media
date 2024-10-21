import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";

const router = express.Router();

router.use("/auth", authRoute);  //auth/register
router.use('/users', userRoute);

export default router;


// http://localhost:8800/users/verify/6716cfab553745df2595d55f/6716cfab553745df2595d55fd6263605-b3b3-4723-9c7c-dea1db9fe266