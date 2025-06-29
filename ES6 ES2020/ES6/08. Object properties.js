// Creating an object
let sname="Someone";
let age = 18;
// without property shorthand
let obj={sname:sname,age:age};
console.log("without :",obj);
// with property Shorthand
let obj1={sname,age};
console.log("With :",obj1);

// Computed keys in objects
let obj2={
    [sname+1]:sname,
    [age+1]: age
}

console.log("Computed keys object :",obj2);