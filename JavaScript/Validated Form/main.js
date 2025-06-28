let form = document.querySelector('form');
let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let email=document.getElementById('email');
let contact=document.getElementById('contact');
let dob=document.getElementById('dob');

function formSubmit(event){
    validateName(fname.value).then().catch(err=>alert(err));
    validateLastName(lname.value).then().catch(err=>alert(err));
    isEmail(email.value).then().catch(err=>alert(err));
    isAge(age.value,dob.value).then().catch(err=>alert(err));
    validateContact(contact.value).then().catch(err=>alert(err));
    event.preventDefault();
}


// Function to check if names are valid
function isOnlyText(text){
    let verifier="abcdefghijklmnopqrstuvwxyz";
    for (const ele of text) {
        if (! verifier.includes(ele)){
            return false;
        }
    }return true;
}
// Function to validate first name
function validateName(text){
    text=text.toLowerCase();
    return new Promise((resolve,reject)=>{
        if (text==""){
            reject("First name cannot be empty.")
        }else if(!isOnlyText(text)){
            reject("First name cannot contain numbers or symbols.");
        }else{
            resolve();
        }
    });
}
// Function to validate last name 
function validateLastName(text){
    return new Promise((resolve,reject)=>{
        if (text==""){
            resolve()
        }else if(!isOnlyText(text.toLowerCase())){
            reject("Last name cannot contain numbers or symbols.");
        }
    });
}

// Function to verify the email
function isEmail(email){
    return new Promise((resolve,reject)=>{
        if (email.length<8){
            reject("E-mail should have more than 8 characters.");
        }else if (! email.includes('@')){
            reject("E-mail should have '@' symbol");
        }else if (! email.endsWith('.com')){
            reject("E-mail does not contain '.com'");
        }else{
            resolve();
        }
    });
}

// Function to validate contact number
function validateContact(contact){
    return new Promise((resolve,reject)=>{
        if (contact<1111111111 || contact>9999999999){
            reject("Contact number should be of ten digits.")
        }else{
            resolve()
        }
    });
}

// Function to validate the age
function isAge(age,dob){
    let curr_year= (new Date()).getFullYear();
    let birth_year=(new Date(dob)).getFullYear();
    
    return new Promise((resolve,reject)=>{
        if (age<18 || age>70){
            reject("Your age is not suitable for this job.");
        }else if(curr_year-birth_year!=age){
            reject("Your date of birth does not match with your age.")
        }else{
            resolve();
        }
    });
}


form.onsubmit=formSubmit;