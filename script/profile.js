// Function to load the username and profile picture into the profile page
function loadUserInfo(){
    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    var image = document.getElementById('profile'); 
    var prof_image = document.getElementById('profile_picture'); 
    var user = document.getElementById('username');
    user.innerHTML = username;
    if (user_cookie[5]!=""){
      image.src=user_cookie[5];
      prof_image.src=user_cookie[5];
    }
    genPlaylist(user_cookie[6]);
}

// Function before going to follower to create follower cookie
function gotoFollower(name, pict){
  deleteCookie("follower");
  setCookie("follower", JSON.stringify([name, pict]));
  goTo("profile_follower.html")
}

// Function to create the playlists list
function genPlaylist(playlists){

  for (let i = 0; i < playlists.length; i++) {
      var target = document.getElementById("playlists");
      target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + playlists[i][1] + " width='150' height='150' onclick=\"goToPlaylist('" + i.toString() + "')\"></div><div class='song-name'><div><b>" + playlists[i][0] + "</b> <br></div></div></div></div>";
  }

}