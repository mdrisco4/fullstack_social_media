import express from "express";
import path from "path";
import { 
        verifyEmail, 
        requestPasswordReset,
        resetPassword, 
        changePassword,
        getUser,
        updateUser, 
    } from "../controllers/userController.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/verify/:userId/:token", verifyEmail);
// PASSWORD RESET
// Come back ~1.46 here
router.post("/request-passwordreset", requestPasswordReset);
router.get("/reset-password/:userId/:token", resetPassword);
router.post("/reset-password", changePassword)

// USER ROUTES
router.post("get-user/:id?", userAuth, getUser);
router.put("update-user", userAuth, updateUser);

// FRIENDS REQUESTS
router.post("/friend-request", userAuth, friendRequest);
router.post("/get-friend-request", userAuth, getFriendRequest);

// ACCEPT/DENY FRIEND REQUEST
router/post("accept-request", userAuth, acceptRequest);

router.get("/verified", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "verifiedpage.html"))
});

router.get("/resetpassword", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "verifiedpage.html"))
});

export default router;