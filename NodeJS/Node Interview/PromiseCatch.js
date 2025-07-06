async function asyncFunc(data){
    return new Promise((res,rej)=>{
        if (data){
            res(data)
        }else{
            rej(new Error("Data not found."))
        }
    });
}

function main(){
    asyncFunc(4)
    .then(value=> console.log("Data is",value))
    .catch(error=> console.log(error.message));
    asyncFunc()
    .then(value=> console.log("Data is",value))
    .catch(error=> console.log(error.message));

}
main();