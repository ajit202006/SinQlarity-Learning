import express from "express";
import { getUser, updateUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuth";

// routing /user queries
const router = express.Router();

// GET request 
router.get("/:userId", isAuthenticated, getUser);

//PUT /user
router.put("/",isAuthenticated, updateUser);


export default router;