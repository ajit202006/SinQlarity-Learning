import mongoose, { Schema } from "mongoose";


const resultSchema = new Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        quizId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const Result = mongoose.model("Resut",resultSchema);

export default Result;