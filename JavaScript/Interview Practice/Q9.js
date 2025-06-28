// Creting couter function using closure from another funtion
function createCounter(count){
    return function(){
        return count++;
    }
}
let counter=createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());