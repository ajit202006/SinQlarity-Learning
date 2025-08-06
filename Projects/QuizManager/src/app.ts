import express,{Request,Response,NextFunction} from "express";
import mongoose, { SetExpressionOperatorReturningBoolean } from "mongoose";

import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import quizRouter from "./routes/quiz";
import ProjectError from "./helper/ProjectError";

const app = express();
const connectionString = process.env.CONNECTION_STRING || "" ;

declare global{
    namespace Express{
        interface Request{
            userId:String
        }
    }
}

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello");
})

// redirecting /user request to userRouter
app.use("/user", userRouter);

// redirecting /auth request to userRouter
app.use("/auth", authRouter);

// redirectiing /quiz request to quizRouter
app.use("/quiz",quizRouter);

app.use((err:ProjectError,req:Request,res:Response,next:NextFunction)=>{
    let resp:ReturnResponse;
    let message:String;
    let statusCode:number;
    if (!!err.statusCode && err.statusCode<500){
        message= err.message;
        statusCode= err.statusCode;
    }else{
        message= "Something went wrong";
        statusCode=500;
    }
    resp = {status:"error",message,data:{}};
    if (!!err.data){
        resp.data= err.data;
    }
    console.log("Reached here first");
    console.log(err.statusCode,err.message);
    res.status(statusCode).send(resp);
})

//Connecting to database 
mongoose.connect(connectionString)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server Connected");

        })
    })
    .catch(err => console.log(err));
