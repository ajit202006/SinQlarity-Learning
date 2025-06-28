// Create your own filter method for array
Array.prototype.myFilter=function(myFunc){
    let result=[];
    for(let index in this){
        if (myFunc(this[index])){
            result.push(this[index]);
        }
    }
    return result;
}

let arr=[12,14,13,11,15,16];
let filtered=arr.myFilter((ele)=>ele%2==0);
console.log(arr);
console.log(filtered);