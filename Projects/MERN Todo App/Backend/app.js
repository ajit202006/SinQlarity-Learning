import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRouter from "./routers/todo.js";
import userRouter from "./routers/users.js";

const app=express();

app.use(cors("http://localhost:5173"));

app.use(express.json());

app.use('/todos',todoRouter);
app.use('/users',userRouter);

await mongoose.connect(process.env.connection_string);
app.listen(process.env.port,()=>{
    console.log("Server Connected");
})