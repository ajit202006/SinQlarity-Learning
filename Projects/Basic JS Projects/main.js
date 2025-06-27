let text = document.getElementById('element');
let add=document.getElementById('add');
let del=document.getElementById('del');
let toRed=document.getElementById('toRed');
let toGreen=document.getElementById('toGreen');
let toBlue=document.getElementById('toBlue');
let toYellow=document.getElementById('toYellow');
let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
let box4=document.getElementById('box4');

let newDiv = document.createElement('div');

function addEvent(){
    let val=text.value;
    newDiv.innerHTML=val;
    newDiv.setAttribute('id','newElement');
    box1.append(newDiv);
    add.disabled=true;
}
function deleteEvent(){
    document.getElementById('newElement');
    newDiv.innerHTML="";
    add.disabled=false;
}
function moveToRed(){
    box1.append(newDiv);
}
function moveToGreen(){
    box2.append(newDiv);
}
function moveToYellow(){
    box3.append(newDiv);
}
function moveToBlue(){
    box4.append(newDiv);
}

add.addEventListener('click',addEvent);
del.addEventListener('click',deleteEvent);
toRed.addEventListener('click',moveToRed);
toGreen.addEventListener('click',moveToGreen);
toBlue.addEventListener('click',moveToBlue);
toYellow.addEventListener('click',moveToYellow);