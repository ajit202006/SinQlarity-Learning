const db= require('../Util/database');

module.exports.insert=(userData)=>{
    let query="Insert into users (name,email,password,remark) values (?,?,?,?)"  ;
    db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
    //process ended correctly
    return true;
}