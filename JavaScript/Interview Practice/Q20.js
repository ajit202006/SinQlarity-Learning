// Create asychronous function that sleeps for given milliseconds
async function sleep(milliseconds) {
    await new Promise((resolve,reject)=>[
        setTimeout(()=>{resolve();},milliseconds)
    ]);
    return milliseconds;
}

sleep(5000).then((val)=>console.log("Waited for",val));