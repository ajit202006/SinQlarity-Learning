function validateUser(name,password){
    if (name==""){
        console.log("Invalid Username! Please Enter again.");
    }else if (password=="" || password.length<8){
        console.log("Invalid Password! Try again!!");
    }else{
        console.log("User Validated Successfully!!")
    }
}
validateUser("Azhar","Az1234345")