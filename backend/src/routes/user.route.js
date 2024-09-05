import express from "express";
import { askQuestion, detetctDisease } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/chatBot',askQuestion);
// router.post('/advice',).
router.post('/detectDisease',detetctDisease);



export default router;
