const express=require('express');

const app=express();

app.get('/add',(req,res)=>{
    let num1=3;
    let num2=6;
    sum=num1+num2;
    res.send(`Sum = ${sum}`);
})


app.listen(3000)