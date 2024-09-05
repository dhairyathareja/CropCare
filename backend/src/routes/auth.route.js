import express from "express";
import upload from "../utils/Multer.js"
import { postLogin, postSignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signUp',upload.single("profileImage"),postSignUp);
router.post('/login',postLogin);



export default router;
