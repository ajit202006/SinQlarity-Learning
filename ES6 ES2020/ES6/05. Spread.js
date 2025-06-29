// spread operator -> destructres array components into separate values
let arr=[1,2,3,4,5];
let arr1=[6,7,8];
// Combilning these two arrays
// Directly adding
let arr2=arr+arr1;
console.log(arr2);//1,2,3,4,56,7,8
console.log(typeof arr2);//string

// using spread (...) operator
let arr3=[...arr,...arr1];
console.log(arr3); // [ 1, 2, 3, 4,5, 6, 7, 8]
console.log(typeof arr3);// object

let arr4=[4,5,6,77,8];
console.log("Spread Array :",...arr4);



// spread with objects
// changing value of references
let obj1={name:"Person",species:"Human"};
let obj2=obj1;
console.log("Original obj =",obj1);
obj2.name="Tommy";// Change in second variable
console.log("Original obj after change=",obj1);
console.log("New obj after change =",obj2);

// using spread
let obj3={name:"Person",species:"Human"};
let obj4={...obj3};
console.log("Original obj =",obj3);
obj4.name="Person2";
console.log("Original obj after change =",obj3);
console.log("New obj after change =",obj4);
