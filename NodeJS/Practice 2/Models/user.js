const db= require('../Util/database');

module.exports.insert= async (userData)=>{
    let query="Insert into users (name,email,password,remark) values (?,?,?,?)"  ;

    // query execution
    let id=0;
    try{
        let result= await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
        id = result[0].insertId;
    }catch (error){
        console.log(error) ;
    }
    //process ended correctly
    return id;
}

// Get
module.exports.get= async (userData)=>{
    let query='select * from users where name=?';
    // execution of query
    let data=0
    try{
        data=await db.execute(query,["Az"]);
        data=data[0];
    }catch(error){
        console.log(error);
    }
    return data;
}

// Updating a value
module.exports.update=async (userData)=>{
    let query=`Update users set password =? where id=?`;
    try {
        await db.execute(query,[userData.password,userData.id]);
        return true;
    }catch (error){
        console.log(error);
        return false;
    }
}