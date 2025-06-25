// Rest parameters are used to handle an unknown amount of parameters.
function addNumbers(...rest){
    let sum=0;
    // arguments.forEach(element => sum+=element);
    for (const element of arguments) {
        sum+=element;
    }
    return sum;
}

// Here The same function can be used to add diffeerent number of arguments without overloading it
let sum_of_two=addNumbers(3,4);
let sum_of_three=addNumbers(7,3,4);
let sum_of_four=addNumbers(7,3,4,14);
console.log(sum_of_two);
console.log(sum_of_three);
console.log(sum_of_four);