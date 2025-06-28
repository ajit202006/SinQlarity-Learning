// function memoization
function toMemoize(fn){
    let cached=new Map();
    return function(...args){
        let arr=args.join(' ');
        if (! cached.get(arr)){
            cached.set(arr,fn(...args));
        }
        return cached.get(arr);
    }

}
function sum(a,b){
    return a+b;
}
const memoizedSum=toMemoize(sum);
console.log(memoizedSum(2,3));
console.log(memoizedSum(2,4));
console.log(memoizedSum(2,3));
