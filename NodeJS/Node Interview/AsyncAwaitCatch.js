async function asyncFunc(data){
    if (data){
        return data;
    }else{
        throw new Error("Data not found.");
    }
}

function main(num){
    asyncFunc(num)
    .then(data=> console.log("Data is",data))
    .catch(error => console.log(error.message));
}
main(4);
main();