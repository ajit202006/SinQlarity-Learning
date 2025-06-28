// passing arbitrary object as 'this' of a function
function printDetails(){
    console.log(`I am ${this.name}. My phone number is ${this.mobile}.`);
}
let student1={name:"Some",mobile:12345};
let student2={name:"Some1",mobile:123456};

let c = printDetails.bind(student2);// This will not run until c is called
let a=printDetails.call(student1);//This will run
let b=printDetails.apply(student2);// This will run
c();// Bind will run