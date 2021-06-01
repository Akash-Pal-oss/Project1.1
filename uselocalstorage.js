let orguser =document.getElementById("email");
let orgpass = document.getElementById("password");
let submit = document.getElementsByClassName("btn");

if(window.localStorage){
    localStorage.setItem("user","akashpal784@gmail.com");
    localStorage.setItem("pass" ,"@123")

    let user =localStorage.getItem("user");
    let pass =localStorage.getItem("pass");

    let meassage =document.getElementsByClassName("message");


    submit.addEventListener('click', ()=>{
        if(user==orguser.value && pass==orgpass.value){
            message.innerHTML ="LOgin successful...";

        }
        else{
            message.innerHTML="username or password invalid..";
        }
    })


}
else{
    console.log("Not Supported..");
    
}

