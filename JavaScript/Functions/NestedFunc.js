// Defining a function inside another function's definition is called nested function
function getSquare(num){
    function doSquare(num){
        return num*num
    }
    return doSquare(num)
}

let num=5;
console.log(`Square of ${num} is ${getSquare(num)}`);