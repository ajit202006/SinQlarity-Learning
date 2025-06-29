// Deep object matching by destructuring assignment
// object matching
function getStud(){
    return {
        sname:"azhar",
        age:14,
        course:"MCA"
    }
}
let {sname:studentName,age:studentAge,course:studentCourse}=getStud();
console.log(studentName,studentAge,studentCourse);

// deep matching
function getStudent(){
    return {
        sname:"azhar",
        age:18,
        qualification:{course:"MCA"}
    }
}
let {sname:stname,age:age,qualification:{course:studCourse}}=getStudent();
console.log(stname,age,studCourse);