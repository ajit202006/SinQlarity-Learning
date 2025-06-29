// Default parameter
// Used to pass value as argument when no argument in passed for a given parameter
function printDetails(name,mobile="000000"){
    console.log(`I am ${name} & my phone number is ${mobile}.`);
}
printDetails("Azhar",124567);// here name will get azhar as argument and mobile will get 124567
printDetails("Azinkya");// here name will get azhar as argument and mobile will get default value


// Rest parameters
// Used to handle an unknown number of arguments passed
function getSumOf(...args){
    let sum=0;
    console.log(args)
    args.forEach((ele)=>sum+=ele);
    console.log(sum);
}
// All three are same functions but will not give error for different number of arguments because of rest (...args) prameter
getSumOf(2,3,4,5,6);
getSumOf(2,3,4);
getSumOf(2,3);