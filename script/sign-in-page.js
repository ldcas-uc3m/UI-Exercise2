// Boolean value to determine if a URL is valid
const isValidUrl = urlString=> {
    try { 
        return Boolean(new URL(urlString)); 
    }
    catch(e){ 
        return false; 
    }
}

// Function to check if a string matches a regular expression
function checkReg (string, re) {
    // Get the value of the input field with id="numb"
    var re = new RegExp(re);
    if (re.test(string)) {
        return true;
    }
    return false;
}

// Function to check that each element of the form meets a certain pattern
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
      // Check dob 
      let dob = document.getElementById("dob").value;
      if (dob == ""){
          output = "Date of birth should not be empty";
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
      // Check accepted terms 
      let checkbox = document.getElementById("checkbox").checked;
      if (!checkbox){
          output = "You have to accept the Terms of use";
          return output;
      }
      // Check picture url terms 
      let pict = document.getElementById("pict").checked;
      if (!(isValidUrl(pict))){
        if (pict != ""){
            output = "The inputed image is not a correct url.";
            return output;

        }
      }
      return output;
  }

// Function to validate the form inputted by the user
function validateForm() {
    let output = checkForm();
    if (output == ""){
        // Get inputed values
        let username = document.getElementById("username").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;
        let pict = document.getElementById("pict").value;
        let password = document.getElementById("password").value;
        var list = [password, name, surname, email, dob, pict, [["Liked Songs", "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"]], []];
        
        let cookie_text = getCookie(username);

        if (cookie_text == ""){
            let emails_list_text = getCookie("emails");
            var emails_list = [];
            if (emails_list_text == ""){
                emails_list = [email];
            }
            else{
                emails_list = JSON.parse(emails_list_text);
                if (emails_list.includes(email)){
                    document.getElementById("demo").innerHTML = "Email already exists";
                    return;
                }
                emails_list.push(email);
            }
            deleteCookie("emails")
            setCookie("emails", JSON.stringify(emails_list));
            setCookie(username, JSON.stringify(list), 30);
            setCookie("username", username, 30);
            window.location.href = "main-page-after-login.html";
        }else{
            output = "The user already exixts";
            //var user_cookie = JSON.parse();
        }
    }
    document.getElementById("demo").innerHTML = output;
}

// Function to set default values to the form
function defaultValues(){
    document.getElementById("name").value  = "";
    document.getElementById("surname").value  = "";
    document.getElementById("email").value  = "";
    document.getElementById("dob").value  = "";
    document.getElementById("pict").value  = "";
    document.getElementById("username").value  = "";
    document.getElementById("password").value  = "";
    document.getElementById("checkbox").checked   = false;
}