import { check, validationResult } from "express-validator";
import { Request, Response } from "express";

async function validateUser(req: Request, res: Response, next: Function) {
    await check("name")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 3 })
        .withMessage("Name should contain more than 3 characters")
        .run(req);
    await check("email")
        .isString()
        .contains("@")
        .withMessage("Email should contain exactly one '@' character")
        .isLength({ min: 8 })
        .withMessage("Email should contain more than 8 characters")
        .run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ status: "Failed", result });
    }
    next();
}


export { validateUser };