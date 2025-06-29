// Template Literals -> Used to pass varible values as string content
let uname="Azinkya";
let age=18;

// Printings without template
function printString(name,age){
    console.log("I am "+name+" \nMy age is "+age+".");
}
printString(uname,age);

// Printing with template
function printTemplate(name,age){
    console.log(`I am ${name} 
My age is ${age}`);
}
printTemplate(uname,age);


// Custom interpolation
function interpolation(string,name,age){
    console.log("Sting :",string );
    console.log("Name :",name );
    console.log("Age :",age );
}
interpolation("I am ' ' and my age is ' '",uname,age);// traditional method
interpolation`I am ${uname} and my age is ${age}`;// using template literal method