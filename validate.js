
const form =document.getElementById('form');
const username =document.getElementById('username');
const email=document.getElementById('email');
const phone =document.getElementById('phone');
const password =document.getElementById('password'); 
const cpassword =document.getElementById('cpassword');
//add event
form.addEventListener('submit', (event) =>  {
    event.preventDefault();
    validate();
})
//define the validate the function
function validate(){

const usernameVal =username.Value.trim();
const emailVal=email.Value.trim();
const phoneVal =phone.Value.trim();
const passwordVal =password.value.trim();
const cpasswordVal =cpassword.value.trim();

 //SeterrorMsg code
function setErrorMsg(input, errormsgs){
    const formControl =input.parentElemnet;
    const small = formControl.querySelector('small');
    formControl.className ='.form-control.error';
    small.innerText = errormsgs;
}
// Setsuccess code
function setSuccessMsg(input){
    const formControl =input.parentElemnet;
    formControl.className='.form-control.success';
}
//validate username
if(usernameVal ===""){
    setErrorMsg(username,'username cannot be blank');
}else if(usernameVal <= 2){
    setErrorMsg(username, 'username must be 3 character');
}else{
    setSuccessMsg(username);
}
//validate email
if(emailVal ===""){
    setErrorMsg(email,'Email cannot be blank');
}else if(!isEmail(emailVal)){
    setErrorMsg(email, 'Not the valid Email');
}else{
    setSuccessMsg(email);
}

//validate the phone number
//validate email
if(phoneVal===""){
    setErrorMsg(phone,'Phone cannot be blank');
}else if(phoneVal != 10){
    setErrorMsg(username, 'Not the valid phone number');
}else{
    setSuccessMsg(phone);
}
// validate the password
if(passwordVal===""){
    setErrorMsg(password,'Phone cannot be blank');
}else if(passwordVal.lenght <= 5){
    setErrorMsg(password, 'Password Minimum 6 character');
}else{
    setSuccessMsg(password);
}
// validate the confirm password
if(cpasswordVal===""){
    setErrorMsg(cpassword,'Phone cannot be blank');
}else if(passwordVal != cpasswordVal){
    setErrorMsg(cpassword, 'Password cannot be match');
}else{
    setSuccessMsg(cpassword);
}


// more email validate
function isEmail(emailVal){
    var atSymbol = emailVal.indexOf('');
    if(atSymbol <1) return false;
    var dot = emailVal.lastindexOf('.');
    if(dot <= atSymbol +3) return false;
    if(dot === emailVal.lenght-1) return false;
    return true;
}
  

    }