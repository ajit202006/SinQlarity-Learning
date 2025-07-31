import mongoose, { Schema } from "mongoose";

let TodoSchema= new Schema({
    task:String,
    isDone:Boolean
})
export default mongoose.model('todo',TodoSchema);