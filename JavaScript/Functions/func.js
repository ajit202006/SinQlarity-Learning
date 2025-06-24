// Creating function to add two numbers
// function declaration      parameters
function addNumbers(          a,  b         )
{// --Funtion scope START

    // function definition
    sum=a+b;

    return sum; // return value

} // --Function scope END

// initializing numbers
num1=4;
num2=8;

// Output to user ;                 Function call
console.log(`${num1} + ${num2} = ${addNumbers(num1,num2)}`);
