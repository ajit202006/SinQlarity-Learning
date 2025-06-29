// Before es6 -> foreach loop
let arr=[1,2,3,4,5,6];
arr.forEach((ele)=>console.log(ele));


// After es6 -> for of loop
let arr1=[1,2,3,4,5,6];
for (ele of arr1) {
    console.log(ele);
}
let str="[1,2,3,4,5,6]";
for (ele of str) {
    console.log(ele);
}