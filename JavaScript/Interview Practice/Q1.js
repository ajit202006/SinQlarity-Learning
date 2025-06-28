// Array.prototype.last()
let arr1=[  24233,1234,6765,'asfd'];
Array.prototype.last=function(){
    let lastInd=this.length-1;
    if (lastInd==-1)
        return lastInd;
    return this[lastInd];
}
console.log(arr1.last())