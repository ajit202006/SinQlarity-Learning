// object to String and string to object conversion

let obj={sname:"someone",mobile:2342342,address:"India"};
let arr=[4,5,4,23,43,4,4,67]
// Object to String and Array to string

let strFromObj=JSON.stringify(obj);
let strFromArr=JSON.stringify(arr);
console.log(strFromObj);
console.log(strFromArr);

// String to Object and String to Array

let objFromStr=JSON.parse(strFromObj);
let arrFromStr=JSON.parse(strFromArr);
console.log(objFromStr);
console.log(arrFromStr);