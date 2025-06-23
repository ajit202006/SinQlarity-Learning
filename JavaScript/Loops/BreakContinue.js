// Break Statement -> To stop the execution of loop
// exiting a loop when i exceeds 13
console.log("--------Break-Statement-Demo----------")
for(let i=1; i<=20; i++){
    //Block of code
    console.log("I am printing",i);

    if (i==13){

        break;//Stops execution when i==13
    }
}
//Continue Statement -> to skip to the next iteration of loop
console.log("--------Continue-Statement-Demo----------")
// Program to print only odd number from 1 to 20 using continue
for(let i =1; i <=20; i++){
    if( i%2==0){
        continue;
    }
    console.log("I am printing ODD number",i)
}