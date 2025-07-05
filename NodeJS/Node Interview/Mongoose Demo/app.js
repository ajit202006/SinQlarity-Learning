const express=require('express');
const mongoose=require('mongoose');
const { createUser, getUser, getUserNames } = require('./controllers/user');
const app = express();

app.use(express.json());
app.use('/create',createUser);
app.use('/get',getUser);
app.use('/getName',getUserNames);

// connections
mongoose.connect("mongodb://localhost:27017/myFirstDatabase").then(success=>app.listen(3000)).catch(error=>console.log(error));
