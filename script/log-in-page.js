// Function to check whether the username and password is valid
function validateLogIn() {
    let output= "";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let cookie_text = getCookie(username);
    if (cookie_text == ""){
        setCookie("username", username, 30);
        output = "No user with that username";
    }else{
        var user_cookie = JSON.parse(cookie_text);
        if (user_cookie[0] == password){
            setCookie("username", username, 30);
            window.location.href = "main-page-after-login.html";
        }else{
            output = "Pasword Incorrect";}
    }
    document.getElementById("demo").innerHTML = output;

}