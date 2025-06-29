// Symbols in ES6

let person={pname:"Someone",id:1234};
let xyz=Symbol('xyz');
let xyz1=Symbol('xyz');
// even if they are symbols for same value they both are different symbols
person[xyz]="Hidden Data";
console.log(person);
console.log(person[xyz]);
console.log(person[xyz1]);