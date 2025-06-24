// Assiging a function definition to any variable is called function expression // Dynamic Binding
let getSquare = function(num){
    return num*num;
}
num=4;
console.log(`Square of ${num} is ${getSquare(num)}.`)


// defining function based on condition using FUNCTION EXPRESSION
operation="add";
let doOperation;
if (operation=="add"){
    doOperation=function(a,b){
        return a+b;
    }
}else{
    doOperation=function(a,b){
        return a-b;
    }
}
console.log(doOperation(4,5))