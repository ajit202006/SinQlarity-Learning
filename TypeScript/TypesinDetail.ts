import { types } from "util";

// object types
let num : {x:number,y:number}={x:10,y:10};
// optional types
let num1 :{x:number,y?:number}={x:32};

// interfaces
interface Point{
    x:number,
    y:number
}
const p1:Point={x:14,y:3242};

// type alias
type MyPoint={
    x:number,
    y:number
}
const p2:MyPoint={x:14,y:3242};

// Difference between type alias and interfaces

// interface can be redeclared
interface Point{
    x:number,
    y:number,
    z?:number
}

// type aliases can't be redeclared
// type MyPoint={
//     x:number,
//     y:number,
//     z?:number
// }

// Union types
let id:number|string=2;
let x:String[]|string=["@",'e'];


// Mapped types
type OnlyBoolsAndHorses={
    [key:string]:boolean|"Horse"
}

const conforms:OnlyBoolsAndHorses={
    a:true,
    b:false,
    c:"Horse",
    // 3:true,// throws error because key can only be string
    // d:"something else" // show error because the value is neither horse not a boolean type
}

// Classes

// Case 1
class Pointer{
    // Old method
    // x:number;
    // y:number;
    // Currently working method
    x:number=2;
    y:number=2;
}
const ptr=new Pointer();
console.log(ptr);

// Case 2
class Pointer1{
    x=0;// compiler will automatically make them of number type
    y=0;
}
let ptr1=new Pointer1();
ptr1.x=2;
console.log(ptr1);
// ptr1.y="val"; // shows error because string can't be assigned to number type

// Case 3

class Pointer2{
    x:number;
    constructor(n:number){
        this.x=n;
    }
}
let ptr2=new Pointer2(4);
console.log(ptr2);


// Case 4
class Student{
    private _name:String="";
    private _standard: number=3;

    get name():String {
        return this._name
    }
    set name(value:String){
        this._name=value;
    }
    get standard():number{
        return this._standard
    }
    set standard(value : number){
        this._standard=value;
    }
}
let st=new Student()
st.name="Aesthetic";
// st.standard=5;
console.log("Student : ",st);