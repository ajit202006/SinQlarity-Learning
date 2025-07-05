//  IIFE => Immediate invoke function execution
// Function that is called with its definition is called IIFE
function getName(){
    return "Someone's Name";
}
// IIFE example:-
(async ()=>{
    const name= await getName();
    console.log("Name is",name);
})();