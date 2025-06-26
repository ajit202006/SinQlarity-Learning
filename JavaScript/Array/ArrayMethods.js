// length property -> gives length of array
console.log("-------------length------------");
let arr=[2,3,4,5,6,7,8]
console.log("Length of array is",arr.length);
arr.length=4; // force fully changing length of array
console.log("Array is",arr);
arr.length=10; // force fully changing length of array
console.log("Array is",arr);

// Concat function in array
console.log("-------------concat------------");
let arr1=[2,3,4,5,6]
let arr2=[21,31,41,51,61];
arr1=arr1.concat(arr2);// adds arr2 at end of arr 1
console.log(arr1);

// Join funtion -> gives string 
console.log("-------------join------------");
let arr3=[4,5,6,7,8];
arr3 = arr3.join(',');
console.log("Array after join :",arr3);

// Push function-> add an element at the end of array , returns length of new array
console.log("-------------push------------");
let arr4=[4,5,6,7,8];
console.log("Original Array :",arr4);
let len=arr4.push(5);
console.log("Push returned :",len);
console.log("Array after push :",arr4);

// Pop function-> removes element at last index and return it
console.log("-------------pop------------");
let arr5=[6,7,8,9,10,11];
console.log("Original Array :",arr5);
let element=arr5.pop();
console.log("Pop returned :", element);
console.log("Array after pop :",arr5);

// Shift function -> removes the first element of array and returns it
console.log("-------------shift------------");
let arr6=[8,9,10,11];
console.log("Original Array :",arr6);
let shift_ele=arr6.shift();
console.log("Shift returned :",shift_ele);
console.log("Array after shift :",arr6);

// Unshift function -> adds element(s) at the beginning of the array and return length of new array
console.log("-------------unshift------------");
let arr7=[4,5,6,7,8];
console.log("Original Array :",arr7);
let unshift_len=arr7.unshift(3);
console.log("Unshift returned :",unshift_len);
console.log("Array after unshift :",arr7)