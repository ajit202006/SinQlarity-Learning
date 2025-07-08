const addUserToDB=(userName:string,password:string,age:number)=>{
    return `User registered`;
}

type lockedState="locked"|"unlocked";

interface User{
    id:number,
    uname:string,
    age :number,
    password:string,
    is_active:true | false,
    accountStatus: string | number // union type 
}
const updateUserData=(objUser:User)=>{
    console.log(objUser.uname);
    return "User updated Successfully";

}

export {addUserToDB,updateUserData};