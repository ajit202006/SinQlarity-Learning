// Creating a map  
// Map = value : value pair 

let mp =new Map();
mp.set("name","Someone");
mp.set("country","India");
mp.set("mobile",346876213);

console.log(mp.get("Someone"));// gives value for name in map
console.log(mp.get("name"));// gives value for name in map
console.log(mp.get("country")); // gives value for country in map
console.log(mp.size); // gives size of map
console.log(mp); // gives whole map structure


// WeakMap -> only objects an be key of valuees
let wm=new WeakMap();
// only objects can be key in weak map
let obj1={some:3,num:3};
let obj2={some:4,num:5};

// wm.set(obj,"obj");
wm.set(obj1,"obj1");
wm.set(obj2,"obj2");
console.log(wm)