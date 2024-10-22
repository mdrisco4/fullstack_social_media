import express from "express";
import path from "path";
import { 
        verifyEmail, 
        requestPasswordReset,
        resetPassword, 
        changePassword, 
    } from "../controllers/userController.js";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/verify/:userId/:token", verifyEmail)
// PASSWORD RESET
router.post("/request-passwordreset", requestPasswordReset);
router.get("/reset-password/:userId/:token", resetPassword);
router.post("/rest-password", changePassword)

router.get("/verified", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "verifiedpage.html"))
});

router.get("/resetpassword", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "verifiedpage.html"))
});

export default router;