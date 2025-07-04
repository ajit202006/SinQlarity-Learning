function addTwo(callBy,a,b){
    console.log(callBy,":",a+b);
}


setImmediate(()=>{
    addTwo("Immediate",5,6);
}); // calback registered with CHECK QUEUE of the next event loop

setTimeout(()=>{
    addTwo("Timeout",7,5);
},12); // callback registered with TIME QUEUE of the next event loop


// Since TIME QUEUE is faster than CHECK QUEUE setTimeout will execute before setImmediate
addTwo("Direct",4,7);