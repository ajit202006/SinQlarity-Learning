import express from "express";
import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// Create quiz
router.post('/', isAuthenticated, createQuiz);

// get quiz
router.get('/:quizId', isAuthenticated, getQuiz);

//update quiz
router.put('/', isAuthenticated, updateQuiz);

// delete quiz
router.delete('/:quizId', isAuthenticated, deleteQuiz);

// publish quiz
router.patch('/publish', isAuthenticated, publishQuiz);



export default router;