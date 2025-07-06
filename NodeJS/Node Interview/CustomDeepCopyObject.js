// Custom program to deep copy

// recursive method
function deepCopyObject(myObject) {
    let resultingObject = {}
    for (let element in myObject) {
        if (typeof myObject[element] === "object") {
            resultingObject[element] = deepCopyObject(myObject[element]);
        } else {
            resultingObject[element] = myObject[element];
        }
    }
    return resultingObject;
}

let obj = {
    a: {
        sdetails: {
            sname: "someone",
            mobile: 1231232
        },
    },
    b: {
        sname: "Student 2",
        country: "Germany"
    },
    c: 9
};



let newObj = deepCopyObject(obj);
console.log(obj);
console.log(newObj);
newObj.a.sdetails.sname = "Student 999";
newObj.b.sname="Student 666";
newObj.c=90;

console.log("======================== After change=================");
console.log(obj);
console.log(newObj);
