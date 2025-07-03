const express=require('express');// importing expresss

const userRouter=require('./Routers/user'); // importing a router that we have created

const app = express();// Creating an object of express to access its functions

app.use(express.json());// Converting data from server into json format 

// Sending a sample response for get request
app.get('/',(req,res)=>{
    res.send("I am a good Server.");
});

//Sending all type of response of /user route to the router
app.use('/user',userRouter);

// sending response to port 3000 of localhost (own system)
app.listen(3000);