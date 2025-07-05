const userModel=require('../models/user');

module.exports.createUser=async (req,res)=>{
    const user=new userModel(req.body);
    const result=await user.save();
    res.send({result:result,status:"success"});
}
module.exports.getUser=async (req,res)=>{
    const user=await userModel.find({});
    res.send(user);
}
module.exports.getUserNames=async (req,res)=>{
    const user=await userModel.find({},{userName:1});
    res.send(user);
}
