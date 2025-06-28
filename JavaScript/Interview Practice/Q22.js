// Creating a time limited function
function timeLimiter(fn,t){
    return function(...args){
        return new Promise((res,rej)=>{
            let id=setTimeout((()=>rej("Time limit exceeded")),t);
            fn(...args)
            .then((data)=>{
                res(data);
                clearTimeout(id);
            })
            .catch((err)=>rej(err));
        })
    }
}
async function square(n){
    await new Promise((res)=>setTimeout(res,100));
    return n*n;
}
const limited=timeLimiter(square,200);
console.log(square(5));