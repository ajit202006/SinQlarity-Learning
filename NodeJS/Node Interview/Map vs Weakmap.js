/// MAP ///

let myMap=new Map();
myMap.set("name","Akshat");
myMap.set("class","3rd");
myMap.set("mobile",1121232);
console.log(myMap);

/// WeakMAP /// => all keys must be object
let weakMap=new WeakMap();
let key={1:"one"};
let key1={1:"one"};
weakMap.set(key,"One");
key=1;
let key2=key;
weakMap.set(key1,"two");
console.log(weakMap.get(key));
console.log(weakMap.get(key1));// Even though both are similar object their reference is different
console.log(weakMap.get(key2));// key2 is a copy of key hence both refrence same memory location

// In weak map if the reference to a key (type:object) gets deleted the value gets collected by the garbage collector 
// hence the object also gets deleted from the weak map . So there remains no way of getting its value.
// Even if we create a similar object with the same values it will not reference the same key in weak map
// and if we had a copy of the key created from the original key then only it can access the value after original keys deletion