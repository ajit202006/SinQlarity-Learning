let img=document.querySelector('img');
img.onclick = function (){
    let Src=img.getAttribute('src')
    if (Src=="Git.png"){
        img.setAttribute('src','Js.png');
    }else{
        img.setAttribute('src','Git.png');
    }
}