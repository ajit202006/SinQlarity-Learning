// Callback

// Demo of asynchoronosity of callback
console.log("Hello");

setTimeout(()=>{
    console.log("value");
},3000);

console.log("Hi")