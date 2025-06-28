// Create a function createHelloWorld that should return a funtion that always eturn hello world.
function createHelloWorld(){
    return function(){
        return "Hello World";
    }
}
let func=createHelloWorld();
console.log(func());