// Introduced in ES6 Promise
function updateAge(age){
    return new Promise((resolve,reject)=>{
        if (age>0){
            age+=1;
            resolve(age);
        }else{
            reject("Wrong Age")
        }
    })
}

updateAge(15).then((updatedAge)=>console.log(updatedAge)).catch((err)=>console.log(err));