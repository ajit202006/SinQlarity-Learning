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
