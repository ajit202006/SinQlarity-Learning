let stopwatch=document.querySelector('.stopwatch');
let start_stopwatch=document.getElementById('stopwatch-start');
let stop_stopwatch=document.getElementById('stopwatch-stop');
let dropdown_btn2=document.getElementById('dropdown-btn2');
let header2=document.getElementById('dropdown-list2');

// Code for stop watch
let stopwatch_count;
function stopwatchCount(startTime){
    // Getting the current time in millisecond from a date object
    let time=(new Date()).getTime();
    let currHour=Math.floor((time-startTime)/1000/60/60);// getting hours 
    let currMinute=Math.floor((time-startTime)/1000/60)%60;// calculates minutes 
    let currSecond=Math.floor((time-startTime)/1000)%60;// calculates seconds 
    let currMilli=(time-startTime)%1000;// finding last three number of millisecond
   
    // Formatting single digit values to look like clock
    if (currHour<10){
        currHour="0"+currHour;
    }
    if (currMinute<10){
        currMinute="0"+currMinute;
    }
    if (currSecond<10){
        currSecond="0"+currSecond;
    }
    if (currMilli<100){
        currMilli="0"+currMilli;
        if (currMilli<10){
            currMilli="0"+currMilli;
        }
    }
    stopwatch.innerHTML=`${currHour} : ${currMinute} : ${currSecond} <span>&nbsp${currMilli}</span>`;
}
start_stopwatch.addEventListener('click',()=>{
    let startTime=new Date();
    stopwatch_count=setInterval(
        stopwatchCount,
        10,
        startTime.getTime()
    );
    start_stopwatch.disabled=true;
});
stop_stopwatch.addEventListener('click',()=>{
    clearInterval(stopwatch_count);
    start_stopwatch.innerHTML="Restart";
    start_stopwatch.disabled=false;
});

let close_flag2=false;
dropdown_btn2.onclick=()=>{
    if (close_flag2){
        header2.style.display='none'
        dropdown_btn2.innerHTML='Menu';
        close_flag2=false;
    }else{      
        header2.style.display='flex';
        dropdown_btn2.innerHTML='X';
        close_flag2=true;
    }
}