let alarm = document.querySelector('.alarm');
let select_hour = document.getElementById('hour');
let select_minute = document.getElementById('minute');
let select_meridian = document.getElementById('meridian');
let set_alarm_btn = document.getElementById('set-alarm');
let stop_alarm_btn = document.getElementById('stop-alarm');
let alarm_sound = document.getElementById('alarm-sound');

// adding options in the select tag
for (let i = 1; i < 13; i++) {
    select_hour.innerHTML += `<option val=${i}>${i}</option>`;
}
for (let i = 0; i < 60; i++) {
    select_minute.innerHTML += `<option val=${i}>${i}</option>`;
}

// Function to set an alarm
let alarm_interval = null;
function setAlarm(offset = 0) { // offset decides if the alarm is snoozed of not
    // getting values inputted in alarm values
    let hours = select_hour.value;
    let minutes = +(select_minute.value)+offset;
    let meridian = select_meridian.value;

    // showing alarm time on screen
    alarm.innerHTML = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}<span>&nbsp;${meridian}</span>`;
    
    // converting to 24 hour system
    if (meridian == "AM" && hours == 12) {
        hours = 0;
    } else if (meridian == "PM" && hours != 12) {
        hours = 12 + (+hours);
    }
    
    // adding an interval to check for alarm time 
    alarm_interval = setInterval(compareTime, 2000, hours, minutes);
}

// comparing current time with alarrm time and executing alarm when time ends
function compareTime(hours, minutes) {
    let date = new Date();// creating a date object to get current time and date
    let curr_hour = date.getHours();// getting current hours
    let curr_minute = date.getMinutes();// getting current minutes
    if (curr_hour == hours && curr_minute == minutes) {
        alarm_sound.play();// playing sound when alarm goes off
        stop_alarm_btn.disabled = false;// enabling the stop button
        set_alarm_btn.disabled = false;// enabling the set/snooze button
    }
}


let snoozer = false;// value to allow snoozing the alarm
// settingg an alarm on click
set_alarm_btn.addEventListener('click', () => {
    // checking if alarm is snoozed or new 
    if (snoozer) {
        clearInterval(alarm_interval);
        setAlarm(5);
        set_alarm_btn.disabled = true;
    } else {
        setAlarm();
        set_alarm_btn.innerHTML = "Snooze";
        set_alarm_btn.disabled = true;
        snoozer = true;
        stop_alarm_btn.disabled = true;
    }
});

// stopping the alarm on click of stop button
stop_alarm_btn.addEventListener('click', () => {
    clearInterval(alarm_interval);
    set_alarm_btn.disabled = false;
    set_alarm_btn.innerHTML = "Set";
    snoozer = false;
});