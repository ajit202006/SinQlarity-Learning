// new.target

function demoTarget(){

    if (new.target){
        this.dname="Someone";
        console.log(this.dname);
    }
    console.log("Hello there!");
}


demoTarget();// wihout new keyword prints only hello there
let targ1= demoTarget();// without new does not assigns any value
console.log(targ1);
let targ2= new demoTarget();// with new keyword also assigns the dname and prints it
console.log(targ2);

