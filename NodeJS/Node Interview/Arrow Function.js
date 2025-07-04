// Syntax for arrow function
    ()=>{}

// More ways to write arrow function

const addTwo = (num1,num2)=>{
    return num1+num2;
}

const addHiToName = uname=>{
    return "Hi " + uname;
}

const addHelloToName = uname => "Hello " + uname;


console.log(addTwo(9,78));
console.log(addHiToName("Some name"));
console.log(addHelloToName("Anyone"));

/// Arrow function are anonymous ///
/// Arrow function don't have this ///