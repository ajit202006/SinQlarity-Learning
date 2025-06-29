// Parameter context
function printDatatype({name,age}){
    console.log("Name :",name);
    console.log("Age :",age);
}
function printDatatype1({name:ename,age:eage}){
    console.log("Name :",ename);
    console.log("Age :",eage);
}
let obj={name:"azhar",age:50};
printDatatype(obj);
printDatatype1(obj);