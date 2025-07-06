const express=require('express');
const rateLimit=require('express-rate-limit');
const app = express();

const limiter = rateLimit({
    windowMs:1*60*1000,
    max:50
});

app.use(limiter);

app.get('/health',(req,res)=>{
    res.send("ok");
});
app.listen(80,()=>{
    console.log("Server Connected");
});