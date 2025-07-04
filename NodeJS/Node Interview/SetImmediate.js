function addTwo(num1,num2){
    console.log(num1+num2);
}

addTwo(7,6);// Runs in first event loop
setImmediate(()=>{
    addTwo(7,8);// Runs in second event loop
});

console.log("I am in event loop");// Runs in first event loop