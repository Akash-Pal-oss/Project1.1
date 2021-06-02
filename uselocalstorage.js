

let orgusername =document.getElementById("email");
let orgemail = document.getElementById("password");
let orgphone=document.getElementById("phone");
let orgpassword=document.getElementById("password");
let orgcpassword=document.getElementById("cpassword");
let submit = document.getElementsByClassName("btn");

if(window.localStorage){
    localStorage.setItem("username","user1");
    localStorage.setItem("email","user1@gmail.com");
    localStorage.setItem("phone","1234567892");
    localStorage.setItem("password","user1@123");
    localStorage.setItem("cpassword","user1@123");

    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");
    let password = localStorage.getItem("password");
    let cpassword = localStorage.getItem("cpassword");


    let message =document.getElementsByTagName("P");

    function showcase(){
        if(username==orgusername.value && email==orgemail.value && phone==orgphone.value && password==orgpassword.value && cpassword==orgpassword.value && password==cpassword){
            message.innerHTML ="Register successful...";

        }
        else{
            message.innerHTML="username or password invalid..";
        }

    }
    submit.addEventListener('click',showcase)


}
else{
    console.log("Not Supported..");
    
}

