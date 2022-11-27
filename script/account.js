printCookieToAccount();

function printCookieToAccount(index){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  document.getElementById("username").defaultValue  = username;
  document.getElementById("password").defaultValue = user_cookie[0];
  document.getElementById("name").defaultValue  = user_cookie[1];
  document.getElementById("surname").defaultValue  =  user_cookie[2];
  document.getElementById("email").defaultValue  = user_cookie[3];
  document.getElementById("dob").defaultValue  = user_cookie[4];
  document.getElementById("pict").defaultValue  = user_cookie[5];
}

function checkReg (string, re) {
  // Get the value of the input field with id="numb"
  var re = new RegExp(re);
  if (re.test(string)) {
      return true;
  }
  return false;
}

function checkForm() {
    let output = "";
    // Check name 
    let name = document.getElementById("name").value;
    if (!(checkReg(name, "^([A-Za-z][a-z]+)$"))){
        output = "Incorrect name format";
        return output;
    }
    // Check surname 
    let surname = document.getElementById("surname").value;
    if (!(checkReg(surname, "^([A-Za-z][a-z]+)$"))){
        output = "Incorrect surname format";
        return output;
    }
    // Check email 
    let email = document.getElementById("email").value;
    if (!(checkReg(email, "^([A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{1,3})$"))){
        output = "Incorrect email format";
        return output;
    }
    // Check username 
    let username = document.getElementById("username").value;
    if (!(checkReg(username, "^([A-Za-z0-9]+)$"))){
        output = "Incorrect username format";
        return output;
    }
    // Check username 
    let password = document.getElementById("password").value;
    if (!(checkReg(password, "^([A-Za-z0-9]{1,8})$"))){
        output = "Incorrect password format";
        return output;
    }
    return output;
}    

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function validateForm() {
  let output = checkForm();
  if (output == ""){
    let old_username = getCookie("username");
    let cookie_text = getCookie(old_username);
    var user_cookie = JSON.parse(cookie_text);

    // Get inputed values
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let pict = document.getElementById("pict").value;
    let password = document.getElementById("password").value;
    //add code
    var list = [password, name, surname, email, dob, pict, user_cookie[6]];
    
    // Delete old cookie and create new one
    deleteCookie("username");
    deleteCookie(old_username);
    setCookie(username, JSON.stringify(list), 30);
    setCookie("username", username, 30);
    window.location.href = "main-page-after-login.html";
  }
  // Output error message
  document.getElementById("demo").innerHTML = output;

}
