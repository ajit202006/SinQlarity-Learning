console.log("----------PI----------");
let pi=Math.PI;// Givess the value of pi
console.log(pi);

// Math max & min
console.log("--------max-min----------");
let mx=Math.max(5,6,34,56,4,0,-1,3); // Finds maximum from a collection of numbers
let mn=Math.min(5,6,34,56,4,0,-1,3); // Finds minimum from a collection of numbers
console.log("Max value in (5,6,34,56,4,0,-1,3) is",mx);
console.log("Min value in (5,6,34,56,4,0,-1,3) is",mn);


// Math random -> generates random number betweeen 0 and 1
console.log("--------random----------");
let r1=Math.random();//0-1
let r2=Math.random();//0-1
let r3=Math.random();//0-1
console.log("First random number is :",r1);
console.log("Second random number is :",r2);
console.log("Third random number is :",r3);

// Math round -> rounding of a number
console.log("----------round---------");
let rd=Math.round(pi);
console.log("Rounding off PI :",rd);
// generating double digit random number using round with random
let twoDig=Math.round(Math.random()*100);
console.log("Two digit random number :",twoDig);

// Math floor -> removes decimal point from a float number without rounding off (Greatest integer function):
console.log("----------floor---------");
let fl=Math.floor(4.9999);
console.log("Floor of 4.9999 is",fl);
// generating one digit random number using floor
let oneDig=Math.floor(Math.random()*10);
console.log("One digit random number :",oneDig);
