// File Upload Logic JavaScript 

const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function() {
  const file_reader = new FileReader();
  file_reader.addEventListener("load", () => {
    const uploaded_image = file_reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  file_reader.readAsDataURL(this.files[0]);
});



function createPodcast(){
    let def_pic = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9398c530-d0a7-4c46-99b4-423a6aabf39f/d3kxnbe-f16dabfb-0cf1-436c-9315-915fbe462f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkzOThjNTMwLWQwYTctNGM0Ni05OWI0LTQyM2E2YWFiZjM5ZlwvZDNreG5iZS1mMTZkYWJmYi0wY2YxLTQzNmMtOTMxNS05MTVmYmU0NjJmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gk0TAQTWUZBrHFjRC0y7pMEEdep95g7p6upVZNpXaZg"
    let play_pict = document.getElementById("pict").value;
    let play_name = document.getElementById("title").value;
    if (play_name == ""){
        let output = "Podcast must have a name";
        document.getElementById("demo").innerHTML = output;
    }else{
        if (play_pict == ""){
            play_pict = def_pic;
        }
        let username = getCookie("username");
        let cookie_text = getCookie(username);
        var user_cookie = JSON.parse(cookie_text);
        user_cookie[7].push([play_name, play_pict]);
        deleteCookie(username);
        setCookie(username, JSON.stringify(user_cookie), 30);
        window.location.href = "main-page-after-login.html";
    }
}