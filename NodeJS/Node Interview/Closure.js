// Closure of a function demo

// Example 1
const outerFunction=()=>{
    const variable=18;
    return innerFunction=()=>{
        return variable;
    }
}
const xyz=outerFunction();
console.log(xyz);
console.log(xyz());

// Example 2
function generatePowerFunction(power){
    return (number)=>number**power;
}

const power3=generatePowerFunction(3);
const power2=generatePowerFunction(2);
const power4=generatePowerFunction(4);
console.log(power2(34));
console.log(power3(34));
console.log(power4(34));