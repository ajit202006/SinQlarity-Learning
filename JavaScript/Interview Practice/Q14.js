// Create your own reduce funtion for an array
Array.prototype.myReduce=function(myFunc,init){
    if (this.length==[])
        return this;
    if (this.length==1)
        return this[0];
    let result=init;
    for(let i=0;i<this.length;i++){
        result=myFunc(result,this[i]);
    }
    return result
}
let arr=[12,12,12];

console.log(arr.myReduce(((element1,element2)=>element1*element2),1));