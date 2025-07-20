import express from "express";
import authRouter from "./routes/auth" ;

const app=express();
// adding json parser 
app.use(express.json());
// adding router for /auth requests
app.use('/auth',authRouter);
// health route to check system status
app.use('/health',(req,res)=>{
    res.send("Server is working");
})

// providing port for the system to run
app.listen(3000,()=>{
    console.log("Server Connected");
});