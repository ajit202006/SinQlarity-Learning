const {myEventEmitter,LOGIN_EVENT}=require('./eventFile');

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log("Writing to database :",userName);
})