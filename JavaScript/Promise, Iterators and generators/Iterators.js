let iterationCount=0;
let nextIndex=0;
let end=6;
let step =1;

const rangeIterator={
    next:function(){
        let result;
        if(nextIndex<end){
            result={value:nextIndex,done:false};
            nextIndex+=step;
            iterationCount++;
            return result;
        }return {value:nextIndex,done:true};

    }
}

console.log(rangeIterator.next()); // first iteration
console.log(rangeIterator.next()); // second iteration
console.log(rangeIterator.next()); // third iteration
console.log(rangeIterator.next()); // fourth iteration
console.log(rangeIterator.next()); // fifth iteration
console.log(rangeIterator.next()); // sixth iteration
// here the iterator reached its end and stops
// Hence after this only the last value will be returned 
console.log(rangeIterator.next());
console.log(rangeIterator.next());