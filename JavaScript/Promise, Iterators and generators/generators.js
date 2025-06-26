function*makeIterator(start=0,end=5,step=1){
    let iterationCount=0;
    for(let i=start;i<end;i+=step){
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
let iter=makeIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); // gives undefined after all iterations are completed
console.log(iter.next()); // gives undefined after all iterations are completed
