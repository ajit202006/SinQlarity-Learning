// Apply() vs Call()
// Arguments are passed in call()
// array of arguments is passed in apply()

function product(pname,price){
    this.pname=pname;
    this.price=price;
}

function user(uname,pname,price){
    this.uname=uname;
    product.call(this,pname,price);
}
function userApply(uname,pname,price){
    this.uname=uname;
    product.apply(this,[pname,price]);
}
// call and apply have same functionality the only difference is passing of arguments
let u1=new user("Akarsh","Laptop",4000);
let u2=new userApply("Adarsh","Laptop",40000);

console.log(u1);
console.log(u2);