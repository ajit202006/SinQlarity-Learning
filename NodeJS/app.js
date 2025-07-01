const express=require('express');
const app=express();

// app.get('/',(req,res)=>{
//     console.log(req);
// });

app.get('/',(req,res)=>{
    res.send("Sent you a response");
});

app.listen(3000);