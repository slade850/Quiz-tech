import express from "express";
const router = express.Router();
import questionController from "./controller";
router.get("/theme/:id", questionController.getQuestionsByTheme);
router.get("/theme/:id/answers", questionController.answersByTheme);
export default router;
