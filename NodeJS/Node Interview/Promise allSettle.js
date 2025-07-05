// Promise.allSettle() waits until all promises are settled resolve or reject

function func1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Function 1");
        },1000);
    });
}
function func2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Function 2");
        },1000);
    });
}
function func3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(new Error("There is an error"));
        },1000);
    });
}

Promise.allSettled([func1(),func2(),func3()]).then(results=>{
    console.log(results);
});

// Outputs array of objects containing status and value if resolved and status and reason if rejected
// Current output :
// [
//   { status: 'fulfilled', value: 'Function 1' },
//   { status: 'fulfilled', value: 'Function 2' },
//   { status: 'rejected', reason: 'Function 3' } 
// ]