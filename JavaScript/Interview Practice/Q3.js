// Check if 2 is passed in a function, returninng index
// MY method :-
function checkPassed(...args){
    for (let i =0;i< arguments.length;i++){// argument is not present in arrow functions
        if (arguments[i]==2){
            return i;
        }
    }return -1;
}
console.log(checkPassed(1,3,4));
// Sir's method :-
function checkPassed(...args){
    return Array.from(arguments).indexOf(2);
}
console.log(checkPassed(1,3,4));
