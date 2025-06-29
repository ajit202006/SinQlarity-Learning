// Constants in ES6
// Before es6
var a=5;// value is mutable
console.log(a);// 5
a=7;
console.log(a); // 7

// after es6
const a1=5;// immutable value
console.log(a1);
// a1=7; // throws error => TypeError: Assignment to constant variable.

const b={name:"Someone",country:"Germany"}; // b is immutable
console.log("Original b :",b);
// b={name:"something",country:"India"};// throws error => TypeError: Assignment to constant variable.
// but the value iside object is mutable
b.name="Something";
b.country="India";
console.log("Changed b :",b)
