// Creating an object
// Method 1 :-
let obj=new Object();
obj.name="Car";
obj.model="XUV";
obj.year=1968;

// Method 2:-
let obj1={name:"Car",model:"MPV",year:1978};

// Method 3:-
function Car(name,model,year){
    this.name=name;
    this.model=model;
    this.year=year;
}
let objByConstructor=new Car("Car","SUV",2002);


// Method 4 :- Using object.create
let obj4=Object.create(obj1);
console.log(obj);
console.log(obj1);
console.log(objByConstructor);
console.log(obj4);


// accessing properties
console.log(obj.name);// Dot notation
console.log(obj1['name']);// Bracket Notation

// Using dot and bracket notation
let x="5";
obj.x=45;// Assigns value to key 'x'
obj1[x]=45;// Assign value to key '5'
console.log(obj,obj1);


// enumerate over object keys
let obj2={"a":1,"b":2,"c":3,"d":4};
for (const key in obj2) {
    console.log(`Value at key ${key} is ${obj2[key]}`);
}

console.log(obj2.prototype);