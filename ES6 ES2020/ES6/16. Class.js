// Creating and using class
class Student{
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
}
const student1=new Student("Someone","6th");
const student2=new Student("Someone2",6);

console.log(student1);
console.log(student2);