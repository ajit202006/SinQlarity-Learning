function getDigitalClockTime(){
    let date=new Date();
    let hr=date.getHours();
    let mn=date.getMinutes();
    let sc=date.getSeconds();
    let meridian="PM";
    if (hr<12){
        meridian="AM";
    }
    if (hr>12){
        hr=hr-12;
    }
    if (hr==0){
        hr=12;
    }
    if (hr<10){
        hr='0'+hr;
    }
    if (mn<10){
        mn='0'+mn;
    }
    if (sc<10){
        sc='0'+sc;
    }
    console.log(`${hr} : ${mn} : ${sc} ${meridian}`);
}
getDigitalClockTime();