// Destructuring assignment
// Array matcching
let arr=[1,2,3,4,5,6];
let [a,b]=arr;
console.log(a,b);
[a,b]=[b,a]
console.log(a,b);

// Object matching\\
function getStud(){
    return {
        sname:"azhar",
        age:14,
        course:"MCA"
    }
}
let {sname,age,course}=getStud();
console.log(sname,age,course);