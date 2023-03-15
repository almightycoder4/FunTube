import express from "express";
import { signup } from "../controllers/auth.js";
const router = express.Router();

//Create a user
router.post("/signup", signup);
//Signin
router.post("/signin");
//Google Auth
router.post("/google");
export default router;
