// Destructuring an Array
let marks=[12,43,56,65,65,45,26,45,52];

let [sub1,sub2,sub3,sub4,sub5,...sub6]=marks;

console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);
console.log(sub5);
console.log(sub6);

// Object destructuring

let obj={
    name : "Someone",
    mobile:6985554,
    address:"ABD-21321"
}

let {name,...mobile}=obj;

console.log(name,mobile.mobile);