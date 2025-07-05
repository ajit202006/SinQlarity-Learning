function giveName(){
    return "This is a name";
}

async function main(){
    console.log(await giveName());
}

main();