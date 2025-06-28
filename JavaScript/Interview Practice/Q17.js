// Restrict a function to be called only once 
function restrictFunction(fn){
    isCalled=true;
    return function(...args){
        if (isCalled){
            isCalled=false;
            return fn(...args);
        }return ;
    }
}
const myfunc=restrictFunction((x)=>x*x);
console.log(myfunc(4));
console.log(myfunc(5));