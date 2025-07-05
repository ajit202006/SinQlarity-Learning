const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userName:String,
    mobile:String
});

const userModel=mongoose.model('user',userSchema);
module.exports =userModel;