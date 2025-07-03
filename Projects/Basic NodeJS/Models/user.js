const Sequelize=require('sequelize');// impoting sequelize to access its data types
const sequelize=require('../Util/database');// importing sequelize from database.js file 

// Initailizing schema of the table created
const User = sequelize.define('user',{
    id :{
        type:Sequelize.INTEGER,
        allowedNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowedNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowedNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowedNull:false
    },
    remark:{
        type:Sequelize.STRING,
        allowedNull:false
    }
});

// Exporting this model to be used by other modules
module.exports=User;