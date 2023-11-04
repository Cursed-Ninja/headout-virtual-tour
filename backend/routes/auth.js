import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup); // creates a new user account 
router.post("/signin", signin); // signs user in to the workspace and returns a jwt token to be used for subsequent requests

export default router;