const userModel=require('../Models/user');


//register
module.exports.register= async (req,res)=>{
    let response = await userModel.insert(req.body);
    if (response){
        res.send({status:"Success",id:response});
    }else{
        res.send({status:"Failed",id:0,message:"User registreation failed."});
    }
}

//get
module.exports.get=async (req,res)=>{
    let data =  await userModel.get();
    if (data){
        res.send({status:"Success",data:data});
    }else{
        res.send({status:"Failure",message:"Cannot fetch data"});
    }
}


//update
module.exports.update=(req,res)=>{
    let updated=userModel.update(req.body);
    if (updated){
        res.send({status:"Success", newPassword:req.body.password});
    }else{
        res.send({status:"Failed",message:"Cannot update user."});
    }
}

//delete
module.exports.delete=(req,res)=>{
    res.send("Deleting from the database.....");
}