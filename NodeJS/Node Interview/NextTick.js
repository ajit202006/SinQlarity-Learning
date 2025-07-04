function addTwo(callBy,a,b){
    console.log(callBy,":",a+b);
}

setImmediate(()=>{
    addTwo("Immediate",5,6);
});

setTimeout(()=>{
    addTwo("Timeout",7,5);
},12); 

process.nextTick(()=>{
    addTwo("Next Tick",9,6);
}); // next tick executes at the start of next event loop
// It puts its callback at the front of the next event loop
// executed after current loop but before any I/O events or timersf



addTwo("Direct",4,3);