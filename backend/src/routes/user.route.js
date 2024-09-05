import express from "express";
import { askQuestion, detectCrop } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/chatBot',askQuestion);
// router.post('/advice',).
router.post('/detectCrop',detectCrop)



export default router;
