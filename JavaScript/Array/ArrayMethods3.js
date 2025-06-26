// foreach method(loop)-> to iterate over each element of array
console.log("-----------for each-----------");
let arr=[3,4,5,6];
arr.forEach((element)=>{
    console.log(element*element);
});

// Map methods -> return new array after applying callback to each element of array
console.log("-----------Map-----------");
let arr1=[4,5,6,7,8];
console.log("Original Array :",arr1);
let map_arr=arr1.map((element)=>(element*element));
console.log("Mapped array :",map_arr);
console.log("Original array after map :",arr1);

// Filter method -> returns new array by removing elements from original array that do not return true for callback
console.log("-----------Filter-----------");
let arr2=[4,5,6,7,8,9,10,11];
console.log("Original Array :",arr2);
let filtered=arr2.filter((element)=>(element%2));// condition to get odd numbers
console.log("Filtered array :",filtered);
console.log("Original array after filter :",arr2);

// Every method -> returns true if callback returns true for every element
console.log("-----------Every-----------");
let arr3=[5,7,9,11];
let every3=arr3.every((element)=>(element%2));
console.log("Array :",arr3);
console.log("Every returned :",every3);
let arr4=[4,5,6,7,8];
let every4=arr4.every((element)=>(element%2));
console.log("Array :",arr4);
console.log("Every returned :",every4);


// Some method -> returns true if callback returns true for atleast one element
console.log("-----------Some-----------");
let arr5=[5,7,9,11];
let some5=arr5.some((element)=>(element%2));
console.log("Array :",arr5);
console.log("Some returned :",some5);
let arr6=[4,6,8];
let some6=arr6.some((element)=>(element%2));
console.log("Array :",arr6);
console.log("Some returned :",some6);
// Reduce method -> reduces list of items down to single value
console.log("-----------Reduce-----------");
let arr7 = [2,3,4,5,6,7];
console.log("Array :",arr7);
let red=arr7.reduce(((x,y)=>(x+y)));
console.log("Reduced value :",red);
// Callback -> passing a function as argument