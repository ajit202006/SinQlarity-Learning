const Sequelize=require('sequelize');// importing sequelize module
// Creating sequelize object to access database with given dialect
const sequelize=new Sequelize("expressjs","root","",{
    dialect:"mysql",
    host:"localhost"
});

// Exporting sequelize to be used by other modules
module.exports=sequelize;