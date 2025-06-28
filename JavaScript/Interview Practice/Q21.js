// Create a function that stops exec

function cancellable(fn,args,t){
    let id=setInterval(()=>{fn(...args);},t);
    return function(){
        clearInterval(id);
    }
}
function sum(a){
    console.log( a+1);
}
let cancelSum=cancellable(sum,[6],10);
setTimeout(cancelSum,40);