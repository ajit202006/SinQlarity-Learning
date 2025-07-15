let alarm = document.querySelector('.alarm');
let select_hour = document.getElementById('hour');
let select_minute = document.getElementById('minute');
let select_meridian = document.getElementById('meridian');
let add_alarm_btn = document.getElementById('add-alarm');
let remove_alarm_btn = document.getElementById('remove-alarm');
let alarm_sound = document.getElementById('alarm-sound');
let alarm_list = document.getElementById('alarm-list');
let alarm_list_label = document.getElementById('alarm-label');
let alarm_array = [];
let alarm_count = 0;
let timeout_object = {};
let snooze_flag = false;
let stop_flag = false;
let alarm_interval=null;
// adding options in the select tag
for (let i = 1; i < 13; i++) {
    select_hour.innerHTML += `<option val=${i}>${i}</option>`;
}
for (let i = 0; i < 60; i++) {
    select_minute.innerHTML += `<option val=${i}>${i}</option>`;
}

//// OLd code ////

// // Function to set an alarm
// let alarm_interval = null;
// function setAlarm(offset = 0) { // offset decides if the alarm is snoozed of not
//     // getting values inputted in alarm values
//     let hours = select_hour.value;
//     let minutes = +(select_minute.value) + offset;
//     let meridian = select_meridian.value;
//     // showing alarm time on screen
//     alarm.innerHTML = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}<span>&nbsp;${meridian}</span>`;

//     // converting to 24 hour system
//     if (meridian == "AM" && hours == 12) {
//         hours = 0;
//     } else if (meridian == "PM" && hours != 12) {
//         hours = 12 + (+hours);
//     }

//     // adding an interval to check for alarm time 
//     alarm_interval = setInterval(compareTime, 2000, hours, minutes);
// }


// // comparing current time with alarrm time and executing alarm when time ends
// function compareTime(hours, minutes) {
//     let date = new Date();// creating a date object to get current time and date
//     let curr_hour = date.getHours();// getting current hours
//     let curr_minute = date.getMinutes();// getting current minutes
//     if (curr_hour == hours && curr_minute == minutes) {
//         alarm_sound.play();// playing sound when alarm goes off
//         stop_alarm_btn.disabled = false;// enabling the stop button
//         set_alarm_btn.disabled = false;// enabling the set/snooze button
//     }
// }
// let snoozer = false;// value to allow snoozing the alarm
// // settingg an alarm on click
// set_alarm_btn.addEventListener('click', () => {
//     // checking if alarm is snoozed or new 
//     if (snoozer) {
//         clearInterval(alarm_interval);
//         setAlarm(5);
//         set_alarm_btn.disabled = true;
//     } else {
//         setAlarm();
//         set_alarm_btn.innerHTML = "Snooze";
//         set_alarm_btn.disabled = true;
//         snoozer = true;
//         stop_alarm_btn.disabled = true;
//     }
// });

// // stopping the alarm on click of stop button
// stop_alarm_btn.addEventListener('click', () => {
//     clearInterval(alarm_interval);
//     set_alarm_btn.disabled = false;
//     set_alarm_btn.innerHTML = "Set";
//     snoozer = false;
// });

//// New Code ////

// function to play ringtone when alarm goes off
function callAlarm(alarm_id) {
    add_alarm_btn.disabled=true;
    alarm_sound.play();
    deleteAlarm(alarm_id);
    remove_alarm_btn.innerHTML="Stop";
    alarm_interval = setInterval(() => {
        alarm_sound.play();
    }, 2000);
    stop_flag=true;
    setTimeout(() => {
        clearInterval(alarm_interval);
        stop_flag=false;
        remove_alarm_btn.innerHTML="Remove";
        add_alarm_btn.disabled=false;
    }, 58000);
}

// function to delete alarm
function deleteAlarm(alarm_id = alarm_list.value) {
    // getting element to be removed into a variable by its id
    let removed_alarm = document.getElementById(`${alarm_id}`);

    // removing the alarm from the alarm array
    alarm_array = alarm_array.filter(element => element != removed_alarm.innerHTML);
    // Clearin the alarm timeout as it is no longer needed
    clearTimeout(timeout_object[removed_alarm.innerHTML]);

    // deleting the alarm
    delete timeout_object[removed_alarm.innerHTML];

    // removing the alarm from the html document
    removed_alarm.remove();

    alarm_count--;//decrementing number of alarm

    if (alarm_count == 0) {
        alarm_list.style.display = "none";// hiding select alarm button
        alarm_list_label.style.display = "none";// hiding select alarm label
        alarm.innerHTML="00 : 00 <span>AM</span>";
    }
}

// function to calculate alarm time difference from current time
function calculateTime(hours, minutes, meridian) {
    let curr_hour = (new Date).getHours();
    let curr_minute = (new Date).getMinutes();
    let curr_second = (new Date).getSeconds();

    // changing 12 hr system time to 24 hour system
    if (meridian == "PM" && hours != 12) {
        hours += 12;
    } if (hours == 12 && meridian == "AM") {
        hours = 0;
    }

    // finding hour difference between current and alarm hour
    if (curr_hour > hours) {
        hours = 24 - (curr_hour - hours);
    } else if (curr_hour < hours) {
        hours -= curr_hour;
    } else {
        hours = 0;
    }

    //finding minutes difference between current and alarm minute
    if (curr_minute > minutes) {
        minutes = 60 - (curr_minute - minutes);
        hours = hours ? hours - 1 : 23;
    } else if (curr_minute < minutes) {
        minutes -= curr_minute;
    } else {
        minutes = 0;
        if (hours == 0) {
            hours = 24;
        }
    }
    if (curr_second && minutes) {
        minutes -= 1;
    }

    // returning time difference in hours and minutes
    return [hours, minutes, curr_second ? 60 - curr_second : 0];
}

// Adding an alarm
add_alarm_btn.addEventListener('click', () => {
    if (alarm_count == 19) {
        // alerting if number of alarms exceeded 20
        alert("Only 20 alarms are allowed at a time");
    } else {
        let hour = +select_hour.value;
        let minute = +select_minute.value;
        let meridian = select_meridian.value;
        let formatted_time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute} ${meridian}`;

        if (!alarm_array.includes(formatted_time)) {
            alarm.innerHTML=`${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} <span>${meridian}</span>`;
            let option = document.createElement('option');
            option.setAttribute('id', `${alarm_count}`);
            option.setAttribute('value', `${alarm_count}`);

            option.innerHTML = formatted_time;


            let second = 0;
            [hour, minute, second] = calculateTime(hour, minute, meridian);

            second = (hour * 60 + minute) * 60 + second;//calculating time of alarm in seconds

            // setting alarm timeout and adding it to an array
            let curr_timeout = setTimeout(callAlarm, second * 1000, alarm_count);

            // adding alarm option to the html
            alarm_list.appendChild(option);

            // making alarm list visible 
            alarm_list.style.display = "inline";
            alarm_list_label.style.display = "inline";

            // adding alarm and its timeout to arrays
            alarm_array.push(formatted_time);
            timeout_object[formatted_time] = curr_timeout;

            alarm_count++; // incrementing number of alarms
        } else {
            // sending message if user tried to add multiple alarms
            alert("Alarm already set");
        }
    }
});

// deleting an alarm
remove_alarm_btn.addEventListener('click', () => {
    if (stop_flag){
        clearInterval(alarm_interval);
        stop_flag=false;
        remove_alarm_btn.innerHTML="Remove";
        add_alarm_btn.disabled=false;
    }else{
        if (!alarm_count) {
            // alerting when trying to delete a not set alarm
            alert("There are no alarms for today");
        } else {
            // otherwise deleting alarm
            deleteAlarm();
        }
    }
});