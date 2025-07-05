

function getName1(){
    throw new Error("Name not found");
}
function getName2(){
   return "Name found";
}
async function main1(){
    try{
        console.log(await getName1());
    }catch (error){
        console.log(error.message)
    }

}
async function main2(){
    try{
        console.log(await getName2());
    }catch (error){
        console.log(error.message)
    }

}
console.log("Printing before main1");
main1();
console.log("Printing after main1");
main2();
console.log("Printing after main 2");

// Printing before main1
// Name not found // its an error where no await is called so it executed synchronously
// Printing after main1
// Printing after main 2
// Name found // await slowed its execution 