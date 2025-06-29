// Fail soft destructuring
let arr=[1,4];
let [a,b,c]=arr;
console.log("Normal destructuring :",a,b,c);
let [a1=0,b1,c1=10]=arr;
console.log("Fail soft destructuring :",a1,b1,c1);