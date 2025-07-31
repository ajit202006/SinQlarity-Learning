import { check, validationResult } from "express-validator";
import todoModel from "../models/todo.js";

const todoController = {
    // GET route to fetch data
    getTodo: async (req, res) => {
        try {
            const data = await todoModel.retrieve();
            res.send({ status: "successfull", data: data });
        } catch (error) {
            console.log(error.message);
            res.send({ status: "failure", message: error.message });
        }
    },

    // POST route to send data
    createTodo: async (req, res) => {
        await check("task").isLength({ min: 4 }).withMessage("Task should contain more than 4 characters").run(req);
        const result = validationResult(req);
        if (result.errors.length) {
            res.send({ status: "failed", errors: result.errors });
        }
        const id = await todoModel.create(req.body);
        res.send({ status: "success", id: id });
    },
    // PUT route to update data
    updateTodo: async (req, res) => {
        try {
            if (req.body.value) {
                const result = await todoModel.updateTask(req.body.id, req.body.task);
                res.send({ status: "success",result:{id:result._id,isDone:result.isDone} });
            } else {
                const result = await todoModel.markDone(req.body.id);
                res.send({ status: "success",result:{id:result._id,isDone:result.isDone} });
            }
        }catch(error){
            console.log(error.message)
            res.send({status:"failed",message:error.message});
        }
       
    },

    // DELETE route to delete data
    deleteTodo: async (req, res) => {
        try {
            const deleted = await todoModel.delete(req.body.id);
            if (deleted.deletedCount) {
                res.send({ status: "successfull", message: `Deleted ${deleted.deletedCount} task.` });
            } else {
                res.send({ status: "failed", message: "Task does not exist" })
            }
        } catch (error) {
            console.log(error.message);
            res.send({ status: "failed", message: error.message })
        }
    }
}

export default todoController;