import { NextFunction, Request, Response } from "express";
import ProjectError from "../helper/ProjectError";
import Quiz from "../models/quiz";
import Result from "../models/result";

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{}
}

const startExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, is_published: 1 });
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (!quiz.is_published) {
            const err = new ProjectError("Quiz not published");
            err.statusCode = 405;
            throw err;
        }

        const resp:ReturnResponse={status:"success",message:"Quiz",data:quiz};
        res.status(200).send(resp);
    } catch (error) {
        next(error);
    }
}

const submitExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const attempted_questions = req.body.attempted_questions;
        const quizId = req.body.quizId;

        const quiz = await Quiz.findById(quizId, { answers: 1 });
        const answers = quiz?.answers;
        const userId = req.userId;
        const allQuestions = Object.keys(answers);
        const total = allQuestions.length;

        let score = 0;

        for (let i = 0; i < total; i++) {
            let question_number = allQuestions[i]
            if(!!attempted_questions[question_number] && answers[question_number] == attempted_questions[question_number]){
                score++;
            }
        }

        const result = new Result({ userId, quizId, score, total });
        const data = await result.save();

        const resp:ReturnResponse ={status:"success",message:"Quiz submitted",data:{total,score,resultId:data._id}}
        res.status(200).send(resp);
    } catch (error) {
        next(error);
    }

}

export { startExam, submitExam };