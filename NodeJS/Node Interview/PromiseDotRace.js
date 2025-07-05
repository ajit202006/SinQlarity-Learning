// Promise.race() returns the first promise that gets resolved or rejected 
// the promise with least execution time will be returned even if it is rejected or throws error

function func1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Function 1');
        },10);
    });
}
function func2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Function 2');
        },15);
    });
}
function func3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Function 3');
        });
    });
}

Promise.race([func1(),func2(),func3()])
.then(results=>console.log(results))
.catch(errors=>console.log(errors));