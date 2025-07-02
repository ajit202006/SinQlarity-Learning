module.exports.register=(req,res)=>{
    res.send(req.body);
}

module.exports.update=(req,res)=>{
    res.send("Updating...");
}

module.exports.delete=(req,res)=>{
    res.send("Deleting from the database.....");
}