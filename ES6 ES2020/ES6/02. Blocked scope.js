
// Global variables
// Scope
{
    var a=5;
}// scope end

console.log("Outside scope ",a);// calling outside scope

// scoped variables 
{// scope starts
    let b=5;
    const c=6;
    console.log("inside scope :",b);
}// scope ends
// console.log("Outside scope :",b);// ReferenceError: b is not defined
// console.log("Outside scope :",c); // ReferenceError: c is not defined


// Variable Hoisting
// 1:-
var a1;
console.log(a1);
// 2:-
console.log(a2);
var a2;
// Both 1 and 2 will give same output without error

//3:-
let b;
console.log(b);// undefined
//4:-
console.log(b1); // ReferenceError: Cannot access 'b1' before initialization
let b1;
// that means scoped variables are not hoisted

