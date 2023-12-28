// let popup = document.getElementById("popups")

// function openPopup(){
//     popup.classList.add("open-popup");
// }
// function closePopup(){
//     popup.classList.remove("open-popup");
// }



















function login(){
    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-Digits*";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}




















function register(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letters*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-Digits*";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password does not Match*";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
    
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}