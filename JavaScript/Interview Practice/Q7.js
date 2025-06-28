// return duplicator of an arryay -> ex. [1,2].duplicator() -> [1,2,1,2]
let arr=[12,1,2,123,1,3];

Array.prototype.duplicator=function(){
    return [...this,...this];
}

console.log(arr.duplicator())