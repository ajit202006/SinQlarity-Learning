import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRouter from "./routers/todo.js";

const app=express();

app.use(cors("http://localhost:5173"));

app.use(express.json());

app.use("/",todoRouter);

await mongoose.connect(process.env.connection_string);
app.listen(process.env.port,()=>{
    console.log("Server Connected");
})