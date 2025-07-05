// Without Promise

console.log("========Without Promise=========");
function func1(){
    return 1  
}
function func2(){
    setTimeout(()=>{
        console.log("Executing func 2");
        return 2   
    },1000);
    
}
function func3(){
    return 3;
}

function callEach(){
    console.log(func1());
    console.log(func2());
    console.log(func3());
}
// callEach();


// Output:-
// 1
// undefined
// 3        


/// With Promise ///
console.log("========With Promise=========");
function func4(){
    return 4 ; 
}
function func5(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(5);   
        },1000);
    })
    
}
function func6(){
    return 6;
}

async function callEach2(){
    console.log(func4());
    await func5().then((res)=>console.log(res)).catch(error=> error);
    console.log(func6());
}

callEach2();
// Output:-
// 4
// 5
// 6