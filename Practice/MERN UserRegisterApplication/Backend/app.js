import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routers/users.js";
const app = express();

app.use(cors("http://localhost:5173"));
app.use(express.json());

app.use('/users',userRouter);

await mongoose.connect(process.env.URL);
app.listen(process.env.PORT , ()=>{
    console.log("Express application running");
})