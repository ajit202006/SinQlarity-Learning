// Adding prefix before every line you log
function addPrefix(str){
    const prefix='$ ';
    const result=str.split('\n').map((str)=>prefix+str).join('\n');
    return result;
}
let resStr=addPrefix("This is first line of string. \nThis is second line. \nThis is third line.");
console.log(resStr);