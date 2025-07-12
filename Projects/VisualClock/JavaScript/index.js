let clock=document.querySelector('.clock');
let clock_btn=document.getElementById('clock-btn');

// Creating a clock
function showTime(flag=false){
    // Creating date object to get time
    let date=new Date();
    // Storing hour minute and seconds value of time
    let currHour=date.getHours();
    let currMinute=date.getMinutes();
    let currSecond=date.getSeconds();
    let currTime="";
    ;
    // Formatting date for 24Hr System.
    if (flag){
        currTime="AM";
        if (currHour>12){
            currHour-=12;
            currTime="PM";
        }else if(currHour==0){
            currHour=12;
        }else if(currHour==12){
            currTime="PM";
        }
    }
    // Formatting the time to make it look better
    if (currHour<10){
        currHour="0"+currHour;
    }
    if (currMinute<10){
        currMinute="0"+currMinute;
    }
    if (currSecond<10){
        currSecond="0"+currSecond;
    }
    // Creating  formatted time in string form
    currTime=`${currHour} : ${currMinute} : ${currSecond} <span>${currTime}<span>`;
    // adding date time to the html clock
    clock.innerHTML=currTime;
}
// Executing the clock
let clockInterval=setInterval(showTime,1000);
let flag=true;
clock_btn.addEventListener("click",()=>{
    if (flag){
        clearInterval(clockInterval);
        clockInterval=setInterval(showTime,1000,flag);
        clock_btn.innerHTML="24 Hr Clock";
        flag=false;
    }else{
        clearInterval(clockInterval);
        clockInterval=setInterval(showTime,1000,flag);
        clock_btn.innerHTML="12 Hr Clock";
        flag=true
    }
});