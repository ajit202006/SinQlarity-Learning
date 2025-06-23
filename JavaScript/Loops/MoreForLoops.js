// for in loop for obejcts 
console.log("----------For--in----------")
let obj={name:"Someone",greeting:"hello",mobile:1234567,Country:"India"};
// for in makes it easier to access the values of objects using keys
for (const key in obj) {
    console.log(key,":",obj[key]);
    
}

// for of loops for arrays
console.log("----------For--of----------")
let arr=[10,15,14,13,12,543,43];
// for of makes it easier to access array elements in sequence without knowing index
for (const val of arr) {
    console.log(val);
}
console.log("----------For--Each----------")
// forEach loop
let arr1 =[10,15,14,43];
// Make super easy to access elements of array using arrow funcions
arr1.forEach(elem=>console.log(elem*2));