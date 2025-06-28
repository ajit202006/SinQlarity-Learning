// Create function composition from array of functions


let arr=[x=>x+1,x=>x*2,x=>x+3];
function createComposite(arr){
    return function(x){
        let lastIndex=arr.length-1;
        for(i=lastIndex;i>=0;i--){
            x=arr[i](x);
        }
        return x;
    }
}
let result=createComposite(arr)
console.log(result(1));
let arr1=[];
result=createComposite(arr1)
console.log(result(1));
