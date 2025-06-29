// Arrow funtions
// Cons:-
function xyz(){
    console.log(this);// gives details of the object of xyz type
}
const xyz1 = ()=>{
    console.log(this);// gives and empty object because arrow function don't have a 'this'
}
// Hence, Array function can't be a constructor
// it also does not have 'argument' variable or new.target
// xyz();
// xyz1();

// Pros:-
// Easy Syntax:-
let square=(ele)=>ele*ele; //function to square a number
// Passed in expression Bodies
let arr=[1,2,3,4,5]
//                 arrow function
let newArr=arr.map((ele)=>ele*ele);
console.log(newArr)

// Creating objects
let retObj=(uname,age)=>({uname:uname,age:age});
console.log(retObj("User12321","12"))


// Use in statement bodies
arr.forEach((ele)=>console.log(ele));