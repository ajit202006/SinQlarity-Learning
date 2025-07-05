// Promise.any => Waits until any of the promises gets resolve 
// Returns the first Promise that resolves but still waits for other promise to finish
// If all promises are rejected then throws triggerUncaghtException

function func1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("Function 1");
        },100);
    })
}
function func2(){
    return new Promise((res,rej)=>{
        setTimeout(()=> {
            res("Function 2");
        },100);
    })
}
function func3(){
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            rej("Function 3");
        },100);
    })
}

Promise.any([func1(),func2(),func3()]).then(results=>console.log(results)).catch(errors=>console.log(errors));