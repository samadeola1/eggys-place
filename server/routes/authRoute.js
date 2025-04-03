import express from "express";
import {signUp,signIn, forgotPassword, resetPassword} from "../controllers/authController.js";

const router = express.Router();
// sign up route
router.post("/sign-up",signUp);

// sign in route
router.post("/sign-in",signIn)

// forgot password
router.post("/forgot-password", forgotPassword)

// reset password
router.put("/reset-password/:resetToken",resetPassword)
export default router;

