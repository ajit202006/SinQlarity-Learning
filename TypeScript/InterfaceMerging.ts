interface Student{
    sname:string,
    age:number,
}
// we can add extra properties to the interface by creating an interface with same name
// addign new properties to the second interface wll add them to the first 
const mergeInterfaces=()=>{
    const akarsh:Student={sname:"something",age:24,level:"Btech"};
    console.log(akarsh);
}

mergeInterfaces();
interface Student{
    level:string
}