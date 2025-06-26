// set = collection of unique values
let set=new Set();
set.add(65); // inserting values using add functions
set.add(5);
set.add(15);
set.add(25);

console.log(set);
// has method
console.log(set.has(65));// checks if element is in the set

// size property
console.log(set.size); // returns the size of the set

// using for each loop to print all elements
set.forEach(element=>console.log("Element :",element));


// converting array to set
let arr=[12,13,14,15,16,26];
let setFromArr=new Set(arr);
console.log("Original Array :",arr);
console.log("Set From Array :",setFromArr);

// converting set to array
// Method 1 using array.from function
let set1=new Set([5,4,6,7,5,4,3]);
let arrFromSet=Array.from(set1);
console.log("Original set :",set1);
console.log("Array from set :",arrFromSet);


// Method 2 : using spread operator
let arrUsingSpread=[...set1];
console.log("Original set :",set1);
console.log("Array made using spread operator :",arrUsingSpread);