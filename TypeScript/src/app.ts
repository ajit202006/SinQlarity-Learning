import express from 'express';
import userRouter from './routes/user';
const app = express();

app.get('/',(req,res)=>{
    res.send("This Server is working");
})

app.use('/user',userRouter);

app.listen(process.env.PORT);