let date_time="2025-06-26 9:5:6:00006";// String 
console.log("Date string: ",date_time);
// Creating Date object from string date_time
let dateTime=new Date(date_time);
console.log("date Object : ",dateTime);
console.log("Year :",dateTime.getFullYear());
console.log("Month :",dateTime.getMonth());
console.log("Date :",dateTime.getDate());
console.log("Time in ms :",dateTime.getTime());
console.log("Hours :",dateTime.getHours()) ;
console.log("Minutes :",dateTime.getMinutes()) ;
console.log("Seconds :",dateTime.getSeconds()) ;
console.log("Milliseconds :",dateTime.getMilliseconds()) ;
