let obj={user:"Someone", mobile:787786587,country:"India"};

// in -> check if a key is present in object
if ('user' in obj){
    console.log("Yes");
}
// instance of operator -> this
// Creating object using function 
function abc(val){
    this.val=val;
}
let x=new abc(56);// Creates an object x of abc type
console.log(x);
console.log(x.val);

