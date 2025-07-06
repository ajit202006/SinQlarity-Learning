// Deep Copy an array

function deepCopyArray(myArr){
    let newArr=[];
    for (const element of myArr) {
        if (typeof element==="object"){
            newArr.push(deepCopyArray(element));
        }else{
            newArr.push(element);
        }
    }
    return newArr;
}
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArr=deepCopyArray(arr);

console.log("Original :", arr);
console.log("Copy :", newArr);
arr[0][0] = 67;
console.log("===============After change=============");
console.log("Original :", arr);
console.log("Copy :", newArr);