// bind() -> assign now call later

// Example 1
function product(pname,price){
    this.pname=pname;
    this.price=price;
}
function student(sname,pname,price){
    this.sname=sname;
    let detail=product.bind(this,pname,price);// th function will only get bind here 

    detail();// commenting this will prevent pname and price properties from assigning to sn 

}
let st=new student("Akarsh","Mobile",6000);
console.log(st);


let student1={
    sname:"Akshat",
    mobile:34143,
    getName(){
        console.log(this);
    }
}
let student2={
    sname:"Someone",
    mobile:2424332,
}

let st1=student1.getName.bind(student1);
let st2=student1.getName.bind(student2);
st1();
st2();