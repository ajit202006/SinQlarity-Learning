const {myEventEmitter,LOGIN_EVENT}=require('./eventFile');

module.exports.login_successful=(userName)=>{
    myEventEmitter.emit(LOGIN_EVENT,userName);
}