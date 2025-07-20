import express from "express";
const authRouter=express.Router();
import { registerUser } from "../controllers/auth";
import { validateUser } from "../middlewares/validators/auth";

authRouter.post('/',(req,res,next)=>{
    res.send('auth route is working.');
});
authRouter.get('/register',(req,res)=>{
    res.send("Send a post request!!");
})
authRouter.post('/register',validateUser,registerUser);

export = authRouter;