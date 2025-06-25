// Defining a function inside another function's definition is called nested function
function getSquare(num){
    function doSquare(){
        return num*num;
    }
    return doSquare();
}

let num=5;
console.log(`Square of ${num} is ${getSquare(num)}`);


// Closure

function getProduct(num){
    return function multiplyBy(multiplier){
        return multiplier*num;
    }// We are returning a whole function at closure 
}

let double=getProduct(2); // double will become a function that multiplies value by 2
console.log(double(3));
let triple=getProduct(3);// triple will become a function that multiplies passed value by 3
console.log(triple(9));