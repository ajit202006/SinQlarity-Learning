const userModel=require('../Models/user');// Importing the model to connect and access the database

// Function to register the user
module.exports.register=async (req,res)=>{
    try{
        // using create function of sequelize module
        let result= await userModel.create(req.body);
        res.send(`Inserted at id = ${result.dataValues.id}`);
    }catch(error){
        console.log(error);
    }
}

// Function to get user data by id
module.exports.get=async (req,res)=>{
    try{
        // using findByPk function of sequelize module
        let result=await userModel.findByPk(req.body.id);
        res.send(result);
    }catch (error){
        console.log(error);
    }
}

// Function to update user data by id
module.exports.update=async (req,res)=>{
    try {
        // using findByPk function of sequelize module
        let userData=await userModel.findByPk(req.body.id);
        if (req.body.name){
            userData.name=req.body.name;
        }
        if (req.body.email){
            userData.email=req.body.email;
        }
        if (req.body.password){
            userData.password=req.body.password;
        }
        if (req.body.remark){
            userData.remark=req.body.remark;
        }
        // using save function of sequelize module to save the changes made
        await userData.save();
        res.send({status:"Updated",data:userData});
    } catch (error) {
        res.send({status:"Failed",message:error});
        console.log(error);
    }
}

// Function to delete user data by id
module.exports.delete= async (req,res)=>{
    try {
        // using findByPk function of sequelize module
        let user=await userModel.findByPk(req.body.id);
        // using destroy function of sequelize module to delete a record
        await user.destroy();
        res.send({status:"Success",message:"User deleted."});
    } catch (error) {
        res.send({status:"Failed",message:"Cannot delete user"});
        console.log(error);
    }
}