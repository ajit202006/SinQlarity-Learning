const R=require('ramda');

// Deep copy  array
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArr = R.clone(arr);
console.log("Original :", arr);
console.log("Copy :", newArr);
arr[0][0] = 67;
console.log("After change=========");
console.log("Original :", arr);
console.log("Copy :", newArr);


// Deep copy object
let obj = {
    a: {
        sname: "Student 1 ",
        country: "India"
    },
    b:{
        sname: "Student 2",
        country: "Germany"
    }
};
let newObj = R.clone(obj);

console.log("Before change: ----------");
console.log("Original :", obj);
console.log("Copy :", newObj);
obj.b.country="Australlia";
console.log("After change=========");
console.log("Original :", obj);
console.log("Copy :", newObj);