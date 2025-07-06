const fs=require('fs');

function readToGenerateError(){
    fs.readFile("file.txt",(err,data)=>{
        if (err){
            console.error("Error occurred :",err.message);
        }else{
            console.log(data.toString());
        }
    });
}
readToGenerateError();