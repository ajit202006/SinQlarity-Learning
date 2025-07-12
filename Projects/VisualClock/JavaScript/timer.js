let timer = document.querySelector('.timer');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let timer_btn = document.getElementById('timer-btn');
let timer_sound=document.getElementById('timer-sound');

function setTimer(end_time) {
    let time = Math.floor((new Date()).getTime() / 1000);// getting current time in ms
    let remaining_seconds = Math.floor((end_time - time)) % 60;// calculating remaining seconds
    let remaining_minutes = Math.floor((end_time - time) / 60) % 60;// calculating remaining minutes
    let remaining_hours = Math.floor((end_time - time) / 60 / 60);// calculating remaining hours

    // Formatting single digit values of time 
    if (remaining_hours < 10) {
        remaining_hours = "0" + remaining_hours;
    }
    if (remaining_minutes < 10) {
        remaining_minutes = "0" + remaining_minutes;
    }
    if (remaining_seconds < 10) {
        remaining_seconds = "0" + remaining_seconds;
    }

    let remaining_time_string = `${remaining_hours} : ${remaining_minutes} : ${remaining_seconds}`;
    timer.innerHTML = remaining_time_string;
    if (time >= end_time) {
        timer_sound.play();//playing audio after timer goes off
        clearInterval(timer_interval);// stopping execution to prevent negative timer
        stopper=false;// setting stopper to false to make the counter start on click
        timer_btn.innerHTML="Start"; // changing stop button to start button on timer completion
    }
}
// Creating a variable to store id of interval function
let timer_interval = null;
let stopper=false;
// Adding event listenar on start button to start timer
timer_btn.addEventListener('click', () => {

    if (!stopper) {
        
        let input_hours = hours.value === "" ? hours.value=0 && 0 : hours.value;
        let input_minutes = minutes.value === "" ? minutes.value=0 && 0 : minutes.value;
        let input_seconds = seconds.value === "" ? seconds.value=0 && 0 : seconds.value;
        let total_time = (input_hours * 60 * 60) + (input_minutes * 60) + (+input_seconds);

        // Taking a flag to validate if any of the present value is given or not
        let invalidInput = true;

        if (input_hours > 100) {
            alert('Timer cannot run for more than 100 hours');
            invalidInput = false;
        }
        if (input_minutes > 59) {
            alert('Minutes can only be in range 0 to 59.');
            invalidInput = false;
        }
        if (input_seconds > 59) {
            alert('Seconds can only be in range 0 to 59.');
            invalidInput = false;
        }
        // Checking if the given time is finite
        if (invalidInput && total_time) {
            let end_time = Math.floor((new Date()).getTime() / 1000) + total_time;
            timer_interval = setInterval(setTimer, 1000, end_time);// setting interval for countdown
            timer_btn.innerHTML = "Stop";// changing button to stop button
        }
        stopper=true;
    }else{
        // functionallity of stop button
        timer_btn.innerHTML="Start";
        clearInterval(timer_interval);// stopping the countdown before completion
        stopper=false;
        timer_sound.play();//playing audio after timer goes off
    }
});
