import mongoose, { Schema } from "mongoose";
import { flattenDiagnosticMessageText } from "typescript";


// Schema=> Architecture
const quizSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        questions_list: [
            {
                question_number:{
                    type:Number,
                    required:true
                },
                question: String,
                options: {
                }
            }
        ],
        answers: {},
        created_by:{
            type:mongoose.Types.ObjectId,
            required:true
        },
        is_published:{
            type:Boolean,
            default:false
        }
    },
    { timestamps: true }
)

// Model => naem of table in singular name of collectioin automatically gets plural
const Quiz = mongoose.model("Quiz", quizSchema);

// exporting schema
export default Quiz;    