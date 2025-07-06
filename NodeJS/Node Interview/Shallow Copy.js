let arr =[1,2,4,5,6,7];

// Shallow copy Array
let arr2=Array.from(arr);// Method 1
let arr3=[...arr];// Method 2
let arr4=arr.slice();// Method 3
let arr5=[];
Object.assign(arr5,arr);
console.log(arr2,arr3,arr4,arr5);

// Shallow copy of Object
let obj={ sname:"Student 1 ",rollno:2341324,mobile :3244241,country : "India"};


let obj3={...obj};// Method 1
let obj4={};
Object.assign(obj4,obj);// Method 2
console.log(obj4,obj3);