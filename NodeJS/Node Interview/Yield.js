// yeild() is used to pause or resume an iteration of  generator function

// without yield
function getNumWihoutYield(index,num=10){
    while (index < num){
        return index;
        index++;
    }
}
let num1=getNumWihoutYield(0);
console.log(num1);
console.log(num1);


function*getNumwithYield(index,num){
    while (index<num){
        yield index;
        index++;
    }
}

let num2=getNumwithYield(0,5);// num2 stores an object of generator type
console.log(num2.next());// next function to call the next iteration
console.log(num2.next());// next function to call the next iteration
console.log(num2.next());// next function to call the next iteration
console.log(num2.next());// next function to call the next iteration
console.log(num2.next());// next function to call the next iteration
console.log(num2.next());// gives undefined value when max value reached
