const express = require('express');

const app=express();

app.use(express.json());

const userRoute=require('./Routers/user');

app.use('/user',userRoute);

app.listen(3000);