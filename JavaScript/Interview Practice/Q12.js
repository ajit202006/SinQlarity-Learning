// Create your own Map function for array
Array.prototype.customMap=function(myFunc){
    let res=[];
    for(let i=0;i<this.length;i++){
        res[i]=myFunc(this[i]);
    }
    return res;
}
let arr=[1,2,3,4,5,6];
let mappedArr=arr.customMap((ele)=>ele+ele);
console.log(arr);
console.log(mappedArr);