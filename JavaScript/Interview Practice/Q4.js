// Getting next date form an object of current date index

function nextDate(){
    let date=this.getDate();
    let month=this.getMonth();
    if ((date==28 || date==29) && month==1){
        return 1;
    }else if(date ==30 && month%2){
        return 1;
    }else if(date ==31 && month%2==0){
        return 1;
    }
    return date+1;
}

let date=new Date();
console.log(date);
date.nextDate=nextDate;

console.log(date.nextDate())