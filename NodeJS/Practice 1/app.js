const express=require('express');

const calculatorRouter=require('./Router/Calculator');

const app=express();

app.use(express.json())
// app.get('/',(req,res)=>{
//     console.log(req);
// });

// app.get('/',(req,res)=>{
//     res.send("Sent you a response");
// });

app.use('/calculator',calculatorRouter);
app.listen(3000);