// Conversion of collection objects into array -> Array.from()
let str = "I am a string";

let set = new Set([1, 2, 3, 4]);

function giveData() {
    return arguments;
}
let args = giveData(1,2,3,4,5);
console.log("Sring :", str);
console.log("Set :", set);

console.log("Arguments :", args);
console.log("After conversion to array");
console.log("Sring :", Array.from(str));
console.log("Set :", Array.from(set));
console.log("Arguments :", Array.from(args));


// Array.keys()
let arr1=[6,5,4,3,2,1];
let keys=arr1.keys();
console.log(keys);
for (const e of keys) {
    console.log(`Value at ${e} is ${arr1[e]}`);    
}
console.log(arr1);


// Array.find()

console.log("--------------Find------------------");
let arr2=[12,14,13,15,17,14,16,12];
console.log("Value of first odd :",arr2.find((ele)=>ele%2));

// Array.findIndex()
console.log("--------------Find Index------------------");
console.log("Index of first odd :",arr2.findIndex((ele)=>ele%2));