// Slice Method -> Creates a subarray from array betwween indices given as arguments without changing original array
console.log("-------------slice------------");
let arr=[2,3,4,5,6,7,8];
console.log("Original Array :",arr);
let sli_arr=arr.slice(1,4);// element at index 4 is not included
console.log("Array after slice :",arr);
console.log("Sliced array :",sli_arr);

// Splice Method -> removes subarray from array start from given index containing the number of elements given
console.log("-------------splice------------");
let arr1=[2,3,4,5,6,7,8];
console.log("Original Array :",arr1);
let spli_arr=arr1.splice(1,3);// 4 element from index 1 are included
console.log("Array after splice :",arr1);
console.log("Spliced array :",spli_arr);

// Reverse Method -> reverses elements of array in place
console.log("-------------revers------------");
let arr2=[2,3,4,5,6,7,8];
console.log("Original Array :",arr2);
let rev_arr=arr2.reverse();
console.log("Reversed array :",rev_arr);
console.log("Original array after reverse :",arr2);

// Sort Method -> Sorts elements of array in place
console.log("-------------Sort------------");
let arr3=[87,4,7,2,11,9];
console.log("Original Array :",arr3);
let sorted_arr=arr3.sort();
// Very Important Note :- 
//           a. for sorting , elements are converted to strings 
//           b. sorting is done lexicographically so 1,11,10,15 all will come before 2 in sorted array
console.log("Sorted array :",sorted_arr);
console.log("Original array after sort :",arr3);

// IndexOf -> returns index of an element in the array, -1 if not present
console.log("-------------index Of------------");
let arr4=[4,7,2,11,9];
console.log("Array :",arr4);
console.log("Index of 11 :",arr4.indexOf(11));
console.log("Index of 5 :",arr4.indexOf(5));