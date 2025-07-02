const userModel=require('../Models/user');

module.exports.register=(req,res)=>{
    userModel.insert(req.body);
    res.send(req.body);
}
module.exports.get=(req,res)=>{
    res.send(req.body);
}

module.exports.update=(req,res)=>{
    res.send("Updating...");
}

module.exports.delete=(req,res)=>{
    res.send("Deleting from the database.....");
}