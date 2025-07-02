const express=require("express");
const app=express();

app.use(express.json());// Parsing the data coming in the body into json format

app.get('/add',(req,res)=>{
    let sum=req.body.num1+req.body.num2;
    res.send(`${req.body.num1} + ${req.body.num2} = ${sum}`);
});

app.post('/add',(req,res)=>{
    let sum=req.body.num1+req.body.num2;
    res.send(`Sum = ${sum}`);
});


app.listen(3000);