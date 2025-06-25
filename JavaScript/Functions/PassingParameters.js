// Pass by value
console.log("-----Pass by Value------");
function changeVal(variable){
    variable+=4;//Value is changed only in function
    console.log("In function =",variable);// op -> 9
}
num=5;
changeVal(num);// Copy of num is passed
// Original value stays same
console.log("Original =",num);// op -> 5


// Pass by Reference
console.log("\n-----Pass by Reference------");
function changeReferedVal(variable){
    variable[0]+=4;//Value is changed in function
    variable[1]+=4;//Value is changed in function
    variable[2]+=4;//Value is changed in function
    variable[3]+=4;//Value is changed in function
    console.log("Array inside function call =",variable);
}4
arr=[4,5,6,7];

console.log("Array before funtion call =",arr);// Value also changed globally
changeReferedVal(arr);
console.log("Array after funtion call =",arr);// Value also changed globally


// Default parameters in functions
// the values that are passed to a function when argument is not passed for parameter is default parameter
console.log("\n-----Default Parameter------");
function addTwoNumbers(a,b=10){
    return a+b;
}
console.log(addTwoNumbers(9,14)); // when we pass two numbers their sum will get output
console.log(addTwoNumbers(9)); // when we pass one number then 10 will be added to it because it is the default parameter 

// sequence of arguments should always match the sequence of parameters
