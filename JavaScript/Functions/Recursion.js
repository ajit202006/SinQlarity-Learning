// Using Recursion to print a series of numbers
console.log("----------Number Series-----------");
function printSeries(num){
    // Base Case
    if (num==0){
        return ;
    }
    printSeries(num-1);// Recursive Statement
    console.log(num);
}

printSeries(6); //Function call




// Using Recursion to print Factorial of a number ( Function Expression )
console.log("----------Factorial-----------");
let doFactorial=function  fact(num){
    //Base Case
    if (num==0 || num ==1){
        return 1;
    }
    // Recursive statement
    return fact(num-1)*num;
}
let num=9;
console.log(`Factorial of ${num} is ${doFactorial(num)}`);// function call 