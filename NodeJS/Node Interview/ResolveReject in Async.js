// Resolve
function getName(){
    return "Good Name";
}
async function resolve(){
    console.log(await getName());
}
resolve();


// Reject
function getName1(){
    throw new Error("Name not found");//  Will print before above getName function because await slows down its execution
}
async function reject(){
    try{
        console.log(await getName1());
    }catch (error){
        console.log(error.message)
    }

}
reject();