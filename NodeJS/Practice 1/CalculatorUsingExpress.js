const express=require('express');
const app = express();

app.use(express.json());

app.post('/add',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} + ${n2} = ${n1+n2}`);
});
app.post('/subtract',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} - ${n2} = ${n1-n2}`);
    
});
app.post('/multiply',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} * ${n2} = ${n1*n2}`);
});
app.post('/divide',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} / ${n2} = ${n1/n2}`);
});

app.listen(3000);