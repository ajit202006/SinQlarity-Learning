// Array.map() - Maps a function to every value of an object
let arr=[4,5,6,7]

// code to square every element of an array and store into other array

// Without Array.map() 

function square(num){ return num*num; }
let arrWithoutMap=[]
for (const element of arr) {
    arrWithoutMap.push(square(element));
}
console.log("Squared without map : ",arrWithoutMap);

// With Array.map() 

let arrWithMap=arr.map(square);

console.log("Squared with map : ",arrWithMap);
