// Asynchronous addition
async function addTwo(promise1,promise2){
    num1= await promise1;
    num2=await promise2;
    return num1+num2;
}
let add=addTwo(Promise.resolve(3),Promise.resolve(4)).then(res=>console.log("Sum =",res));
console.log(add);