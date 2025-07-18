let alarm = document.querySelector('.alarm');
let select_hour = document.getElementById('hour');
let select_minute = document.getElementById('minute');
let select_meridian = document.getElementById('meridian');
let add_alarm_btn = document.getElementById('add-alarm');
let alarm_sound = document.getElementById('alarm-sound');
let alarm_list = document.getElementById('alarm-list');
let alarm_list_label = document.getElementById('alarm-label');
let dropdown_btn4=document.getElementById('dropdown-btn4');
let header4=document.getElementById('dropdown-list4');
let alarm_array = [];
let alarm_count = 0;
let timeout_object = {};
let stop_flag = false;
let alarm_interval = null;


// adding options in the select tag
for (let i = 1; i < 13; i++) {
    select_hour.innerHTML += `<option val=${i}>${i >= 10 ? i : '0' + i}</option>`;
}
for (let i = 0; i < 60; i++) {
    select_minute.innerHTML += `<option val=${i}>${i >= 10 ? i : '0' + i}</option>`;
}


//// New Code ////

// function to play ringtone when alarm goes off
function callAlarm(alarm_id) {
    let curr_alarm = document.getElementById(`li-${alarm_id}`);
    // Ringing the alarm tune at every two second
    alarm_sound.play();
    alarm_interval = setInterval(() => {
        alarm_sound.play();
    }, 2000);

    // Changin the add button to stop button
    add_alarm_btn.innerHTML = "Stop";
    stop_flag = true;

    // dislaying the alarm time
    alarm.innerHTML = curr_alarm.innerText.slice(0, 8);
    alarm.style.display = "flex";

    // Stopping alarm ring after one minute
    setTimeout(() => {
        alert("Alarm Ringing");
        clearInterval(alarm_interval);
        stop_flag = false;
        add_alarm_btn.innerHTML = "Add";
        alarm.style.display = "none";
        let curr_timeout = setTimeout(callAlarm, (24 * 60 * 60 - 60) * 1000, alarm_id);
        timeout_object[alarm.innerHTML] = curr_timeout;
    }, 58000);
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

// Function to remove an alarm
function removeAlarm(alarm_id) {

    // Accessing element from html document
    let to_be_removed = document.getElementById(`li-${alarm_id}`);
    let alarm_time = to_be_removed.innerText.slice(0, 8);

    // removing the alarm from the alarm array
    alarm_array = alarm_array.filter(element => element != alarm_time);

    // Clearing the alarm timeout as it is no longer needed
    clearTimeout(timeout_object[alarm_time]);
    // deleting the alarm
    delete timeout_object[alarm_time];

    // removing the alarm from html document 
    to_be_removed.remove();

    alarm_count--;//decrementing number of alarm

    if (alarm_count == 0) {
        alarm_list.style.opacity = 0;// hiding select alarm button
        alarm_list_label.style.opacity = 0;// hiding select alarm label
    }
}

// Adding an alarm
add_alarm_btn.addEventListener('click', () => {
    if (alarm_count == 19) {
        // alerting if number of alarms exceeded 20
        alert("Only 20 alarms are allowed at a time");
    } else if (stop_flag) {
        let curr_second = (new Date()).getSeconds();// getting second when stop buttn is clicked
        // stopping the alarm
        clearInterval(alarm_interval);
        // Changing stop button to add button
        stop_flag = false;
        add_alarm_btn.innerHTML = "Add";
        // hiding alarm dislay
        alarm.style.display = "none";
        // Getting the id of running alarm
        let alarm_id = null;
        for (let alarm_id = 0; alarm_id < 20; alarm_id++) {
            if (document.getElementById(`li-${alarm_id}`).innerText.slice(0, 8) == alarm.innerHTML) {
                break;
            }
        }
        // setting same alarm for the next day
        let curr_timeout = setTimeout(callAlarm, (24 * 60 * 60 - 60 + curr_second) * 1000, alarm_id);
        timeout_object[alarm.innerHTML] = curr_timeout;
    }
    else {
        let hour = +select_hour.value;
        let minute = +select_minute.value;
        let meridian = select_meridian.value;
        let formatted_time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute} ${meridian}`;

        if (!alarm_array.includes(formatted_time)) {
            let li = document.createElement('li');// Creating a list item
            let btn = document.createElement(`button`);// Creating a button
            li.setAttribute('id', `li-${alarm_count}`);// giving an id to list item
            btn.setAttribute('id', `${alarm_count}`);// giving id to button

            // adding removeAlarm function as onclick event for button
            btn.setAttribute('onclick', `removeAlarm(${alarm_count})`);
            li.innerHTML = formatted_time;
            btn.innerHTML = "Delete";

            // adding button to list item
            li.appendChild(btn);

            let second = 0;
            [hour, minute, second] = calculateTime(hour, minute, meridian);

            second = (hour * 60 + minute) * 60 + second;//calculating time of alarm in seconds

            // setting alarm timeout and adding it to an array
            let curr_timeout = setTimeout(callAlarm, second * 1000, alarm_count);

            // adding alarm option to the html
            alarm_list.appendChild(li);

            // making alarm list visible 
            alarm_list_label.style.display = "block";
            alarm_list_label.style.opacity = 1;
            alarm_list.style.opacity = 1;
            if (alarm_count >= 3) {
                alarm_list.style.overflowY = "scroll";
                alarm_list.style.scrollSnapType = "y mandatory";
            }

            // adding alarm and its timeout to arrays
            alarm_array.push(formatted_time);
            timeout_object[formatted_time] = curr_timeout;
            alarm_array.sort();
            console.log(alarm_array);
            alarm_count++; // incrementing number of alarms
        } else {
            // sending message if user tried to add multiple alarms
            alert("Alarm already set");
        }
    }
});

let close_flag4=false;
dropdown_btn4.onclick=()=>{
    if (close_flag4){
        header4.style.display='none'
        dropdown_btn4.innerHTML='Menu';
        close_flag4=false;
    }else{
        
        header4.style.display='flex';
        dropdown_btn4.innerHTML='X';
        close_flag4=true;
    }
}