import express from "express";
import { googleAuth, signup, signin } from "../controllers/auth.js";
const router = express.Router();

//Create a user
router.post("/signup", signup);
//Signin
router.post("/signin", signin);
//Google Auth
router.post("/google", googleAuth);

export default router;
