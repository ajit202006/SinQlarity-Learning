// Before es6 

let bin=parseInt(0b111110111);
let oct=parseInt(0o767);
console.log(bin==503);
console.log(oct==503);


// After es6
console.log(0b111110111==503);
console.log(0o767==503);