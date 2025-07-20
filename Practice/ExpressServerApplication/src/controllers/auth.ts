import { Request,Response } from "express";

function registerUser(req: Request, res: Response) {
    res.send({status:"Successfull",result:req.body});
}

export {registerUser};