import Todo from "../database/todo.js"

let todoModel = {
    create: async (data) => {
        const result = await Todo.create(data);
        return result._id;
    },

    retrieve: async () => {
        const data = await Todo.find();
        return data;
    },

    updateTask: async (id, task) => {
        try {
            const current_todo = await Todo.findById(id);
            await current_todo.updateOne({ isDone: !current_todo.isDone });
        } catch (error) {
            console.log(error);
        }
    },
    markDone: async (id) => {
        const current_todo = await Todo.findById(id);
        await current_todo.updateOne({ isDone: !current_todo.isDone });
        return current_todo;
    },

    delete: async (id) => {
        const current_todo = await Todo.deleteOne({ _id: id });
        return current_todo;
    }
}

export default todoModel;