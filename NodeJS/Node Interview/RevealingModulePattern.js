function createModuleManager(){
    let userList=[];
    // A Public function
    function addUser(uname){
        userList.push(uname);
        printConfirmation(uname);
    }
    // A private function
    function printConfirmation(uname){
        console.warn("User added with username :",uname);
    }
    return {addNewUser:addUser};
}

const UserModule=createModuleManager();
UserModule.addNewUser("User_12439127389188");