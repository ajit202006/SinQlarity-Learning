// __proto__ :- used to access the prototype of object from which current object is created
let obj={name:"Someone",place:"Somewhere",mobile:123564};
function Car(type,year){
    this.type=45;
    this.year=99;
}

let obj1=Object.create(obj);// create uses obj as a prototype for obj1
// This above method is called inheritance
console.log(obj1.__proto__);// __proto__ gives the prototype of object from which obj1 is created


let obj2=Object.create(new Car("Some",4566));
console.log(Car.prototype);// Used to access the prototype of the Constructor it is called by 
// protoype is also used to change or access the properties of a constructor
console.log(obj2.__proto__);