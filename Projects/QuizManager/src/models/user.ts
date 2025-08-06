import mongoose, { Schema } from "mongoose";


// Schema=> Architecture
const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)

// Model => naem of table in singular name of collectioin automatically gets plural
const User = mongoose.model("User",userSchema);

// exporting schema
export default User;    