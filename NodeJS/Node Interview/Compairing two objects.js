// Creating objects
let obj1={uname:"User1234",age:28};
let obj2={uname:"User1234",age:28};

// Using lodash to compare
console.log("Using lodash module==========================");
const _=require('lodash');

console.log(obj1===obj2);
console.log(_.isEqual(obj1,obj2));


// Creating my own function to compare

console.log("Using custom function =======================");
function compObject(obj1,obj2){
    if (obj1.length !== obj2.length){
        return false;
    }
    for (const key in obj1) {
        if(obj1[key]!=obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(compObject(obj1,obj2));