class Employee{
    ename:string;
    salary:number;
    constructor(ename:string,salary:number){
        this.ename=ename;
        this.salary=salary;
    }
}
class EmployeeWithAge extends Employee{
    age:Number=0;
    constructor(ename:string,salary:number,age:number){
        super(ename,salary);
        this.age=age;
    }
}
const extendClass=()=>{
    const ramesh=new EmployeeWithAge("Ramesh",34444,18);
    ramesh.salary=300000
    ramesh.age=54;
    console.log(ramesh);
}
extendClass();