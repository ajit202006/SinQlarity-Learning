function getDetails(flag=0){
    if (flag){
        return "Akshat";
    }
    return "India";
}

async function fetchData(){
    const name=await getDetails(1);// 
    const country=await getDetails();// Will resolve only when above await executes
    return { name, country };
}

async function main(){
    const result= await fetchData();
    console.log(`${result.name} lives in ${result.country}`);
}

main();