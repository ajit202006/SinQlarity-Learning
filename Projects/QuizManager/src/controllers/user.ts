import { NextFunction, Request, Response } from "express";
import ProjectError from "../helper/ProjectError";
import User from "../models/user";

// Response 
interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}

// execute /user queries

const getUser = async (req: Request, res: Response,next:NextFunction) => {
    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        if (req.userId != req.params.userId) {
            const err=new ProjectError("Unauthorized User");
            err.statusCode=401;
            err.data= {Error: "This is an error"};
            throw err;
        }

        const user = await User.findById(userId, { name: 1, email: 1, _id: 0 });
        if (!user) {
            const err= new ProjectError("User not found");
            err.statusCode = 401;
            throw err;
         } else {
            resp = { status: "success", message: "User found", data: { user: user } };
            res.send(resp)
        }
    } catch (error) {
        next(error);
    }
}
const updateUser = async (req: Request, res: Response,next:NextFunction) => {
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;
        if (req.userId != req.body._id) {
            const err = new ProjectError("Unauthorized User");
            err.statusCode = 401;
            throw err;
        }
        const user = await User.findById(userId);
        user ? user.name = req.body.name : undefined;
        await user?.save()
        if (!user) {
            const err = new ProjectError("No user found");
            err.statusCode = 401;
            throw err;
        } else {
            resp = { status: "success", message: "Registration done", data: { user } };
            res.send(resp)
        }
    } catch (error) {
        next(error);
    }
}

export { getUser, updateUser };