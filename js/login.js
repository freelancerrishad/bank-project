document.getElementById("btn-submit").addEventListener("click",function(){
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    
    if(email === "wdrishad@gmail.com" && password ==="rishad"){
        window.location.href = 'bank.html';
    }
    else{
        alert("Envalid Username and password")
    }
})