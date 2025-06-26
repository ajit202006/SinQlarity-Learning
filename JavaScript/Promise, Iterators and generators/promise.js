function validate(name){
    return new Promise((resolve,reject)=>{
        if (name == "abcd"){
            resolve("Validated");
        }else{
            reject("Not Validated");
        }
    });
}

validate("abc")
.then((res)=>console.log(res))
.catch((res)=>console.log(res));