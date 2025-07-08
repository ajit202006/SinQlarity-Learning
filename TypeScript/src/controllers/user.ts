import {Request,Response} from 'express';
import {addUserToDB,updateUserData} from "../models/user";
const registerUser=(req:Request,res:Response)=>{
    const user="Azinkya";
    const password="password";
    const age=32;

    let result = addUserToDB(user,password,age);
    res.send(result);
}

const updateUser=(req:Request,res:Response)=>{
    // interface -> blueprint of object
    interface Point{
        readonly x:number,
        readonly y:number
    }
    let point:Point={x:3,y:4};
    // point.x=4; // Throws error because readonly properties can't be updated
    console.log(point.x,point.y);

    // User defined union type
    type lockedState="locked"|"unlocked";// self creaated union type
    const myUser={
        id:2,
        uname:"Akshat",
        age:13,
        password:'!213',
        is_active:true,
        accountStatus:"locked"
    }
    const result = updateUserData(myUser);
    res.send(result);
}
export {registerUser,updateUser}