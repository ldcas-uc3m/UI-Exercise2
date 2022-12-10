// Dict for keeping the favourites marked when loaded
var likes = {
  "mpf": "like1",
  "atw": "like2",
  "tl": "like3",
  "pr": "like4",
  "e": "like5",
  "sti": "like6",
  "tnhmb": "like7",
  "imb": "like8",
  "305": "like9",
  "wyg": "like10",
  "str": "like11",
  "wmyb": "like12",
  "twiw": "like13",
  "g4u": "like14",
  "sh": "like15",
};

// Function to display the dropdown elements
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.profile_pic')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}

// Function that checks if the user is already logged in
function checkUser() {
  let cookie_text = getCookie("username");
  if (cookie_text != ""){
      window.location.href = "main-page-after-login.html";
  }
}

// Function to add a song to your Liked Songs
function addLiked(song){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  user_cookie[6][0].push(song);
  deleteCookie(username);
  setCookie(username, JSON.stringify(user_cookie), 30);
}

// Function to delete a song from your Liked Songs
function delLiked(song){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  index = user_cookie[6][0].indexOf(song);
  if (index != -1){
    user_cookie[6][0].splice(index, 1);
    deleteCookie(username);
    setCookie(username, JSON.stringify(user_cookie), 30);
  }
}

// Function to create a cookie given a name, the values, and the expiration date
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get the content of a cookie by name
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// Function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 13 Dec 1989 00:00:01 GMT;';
}

// Function for the playback controls
$(function() {
  $('audio').audioPlayer();
});

// Function to change from one song to another
function changeSong(audioFile){
  document.getElementById("audio").setAttribute('src', audioFile);
  audio.play(); //call this to play the song right away
  // save the song
  song = audioFile.split("/");
  song_name = song[song.length - 1].split(".")[0];
  localStorage.setItem('curr-song', song_name);
}

// Function to load the profile picture selected by the user
function loadProfilePic(){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  var image = document.getElementById('profile'); 
  if (user_cookie[5]!=""){
    image.src=user_cookie[5];
  }
}

// Function to load all the data in the main page
function loadPage(){
  // Load Likes
  loadLikes()
  // Load playlist data
  loadPlaylists()
  // Load podcast data
  loadPodcasts()
}

function loadPlaylists(){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  
  playlists = user_cookie[6];

  var target = document.getElementById("myTable");
  target.innerHTML += "<div class='row'><div class='tag'>Playlists</div><div>";
  
  // Add three playlists (if you have them)
  for (let i = 0; i < playlists.length; i++) {
    if (i < 3){
      target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + playlists[i][1] + " width='150' height='150' onclick=\"goToPlaylist('" + i.toString() + "')\"></div><div class='song-name'><div><b>" + playlists[i][0] + "</b> <br></div></div></div></div>";
    }  
  }
  // Add two playlist recommendations
  target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=https://profesional.tarkett.es/media/img/M/THH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg width='150' height='150'></div><div class='song-name'><div><b>Playlist recommendation 1</b> <br></div></div></div></div>";
  target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=https://profesional.tarkett.es/media/img/M/THH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg width='150' height='150'></div><div class='song-name'><div><b>Playlist recommendation 1</b> <br></div></div></div></div>";

  target.innerHTML+="<div class='row' style='background-color: #F0E9D2'>&nbsp;</div>"

}

function loadPodcasts(){
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  
  podcasts = user_cookie[7];

  var target = document.getElementById("myTable");
  target.innerHTML += "<div class='row'><div class='tag'>Podcasts</div><div>";

  // Add three playlists (if you have them)
  for (let i = 0; i < podcasts.length; i++) {
     if (i < 3){
      target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + podcasts[i][1] + " width='150' height='150' onclick=\"goToPodcast('" + i.toString() + "')\"></div><div class='song-name'><div><b>" + podcasts[i][0] + "</b> <br></div></div></div></div>";
    }  
  }

  // Add three podcast recommendations
  target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=https://profesional.tarkett.es/media/img/M/THH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg width='150' height='150'></div><div class='song-name'><div><b>Podcast recommendation 1</b> <br></div></div></div></div>";
  target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=https://profesional.tarkett.es/media/img/M/THH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg width='150' height='150'></div><div class='song-name'><div><b>Podcast recommendation 2</b> <br></div></div></div></div>";
  target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=https://profesional.tarkett.es/media/img/M/THH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg width='150' height='150'></div><div class='song-name'><div><b>Podcast recommendation 3</b> <br></div></div></div></div>";
  
  // ADD HARDCODED RECOMMENDATIONS
}

// Function to load the songs liked by the user
function loadLikes(){
  loadProfilePic()
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  for (let i = 1; i < user_cookie[6][0].length; i++) {
    $('#'+ likes[user_cookie[6][0][i]]).css("display", "none");
    $('#filled_'+ likes[user_cookie[6][0][i]]).css("display", "inline-flex");
  }
}

// Function to redirect from one page to another
function goTo(path){
  window.location.href = path;
}

// Function to be executed before a playlist is accessed, it creates the cookie with the song names
function goToPlaylist(index){
  deleteCookie("playlist");
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  setCookie("playlist", JSON.stringify(user_cookie[6][index]));
  goTo("playlist.html")
}

function goToPodcast(index){
  deleteCookie("podcast");
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  setCookie("podcast", JSON.stringify(user_cookie[7][index]));
  goTo("podcast.html")
}

// Function to go to Likes songs playlist
function goToLiked(){
  goToPlaylist(0)
}


$(document).ready(function(){
  // Code to confirm logout
  $('#logout').click(function(){
    var reallyLogout=confirm("Do you really want to log out?");
    if(reallyLogout){
        deleteCookie("username");
        window.location.href="main-page-before-login.html";
    }
});
  // Javascript code for the search engine
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable .grid-song").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  // Javascript code for the like buttons
  $('#like1').click(function(){
    addLiked("mpf");
    $('#like1').css("display", "none");
    $('#filled_like1').css("display", "inline-flex");
  });
  $('#filled_like1').click(function(){
    delLiked("mpf");
    $('#like1').css("display", "inline-flex");
    $('#filled_like1').css("display", "none");
  });

  $('#like2').click(function(){
    addLiked("atw");
    $('#like2').css("display", "none");
    $('#filled_like2').css("display", "inline-flex");
  });
  $('#filled_like2').click(function(){
    delLiked("atw");
      $('#like2').css("display", "inline-flex");
      $('#filled_like2').css("display", "none");
  });

  $('#like3').click(function(){
    addLiked("tl");
    $('#like3').css("display", "none");
    $('#filled_like3').css("display", "inline-flex");
  });
  $('#filled_like3').click(function(){
      delLiked("tl");
      $('#like3').css("display", "inline-flex");
      $('#filled_like3').css("display", "none");
  });

  $('#like4').click(function(){
    addLiked("pr");
    $('#like4').css("display", "none");
    $('#filled_like4').css("display", "inline-flex");
  });
  $('#filled_like4').click(function(){
      delLiked("pr");
      $('#like4').css("display", "inline-flex");
      $('#filled_like4').css("display", "none");
  });

  $('#like5').click(function(){
    addLiked("e");
    $('#like5').css("display", "none");
    $('#filled_like5').css("display", "inline-flex");
  });
  $('#filled_like5').click(function(){
      delLiked("e");
      $('#like5').css("display", "inline-flex");
      $('#filled_like5').css("display", "none");
  });

  $('#like6').click(function(){
    addLiked("sti");
    $('#like6').css("display", "none");
    $('#filled_like6').css("display", "inline-flex");
  });
  $('#filled_like6').click(function(){
    delLiked("sti");
      $('#like6').css("display", "inline-flex");
      $('#filled_like6').css("display", "none");
  });

  $('#like7').click(function(){
    addLiked("tnhmb");
    $('#like7').css("display", "none");
    $('#filled_like7').css("display", "inline-flex");
  });
  $('#filled_like7').click(function(){
    delLiked("tnhmb");
      $('#like7').css("display", "inline-flex");
      $('#filled_like7').css("display", "none");
  });

  $('#like8').click(function(){
    addLiked("imb");
    $('#like8').css("display", "none");
    $('#filled_like8').css("display", "inline-flex");
  });
  $('#filled_like8').click(function(){
    delLiked("imb");
      $('#like8').css("display", "inline-flex");
      $('#filled_like8').css("display", "none");
  });

  $('#like9').click(function(){
    addLiked("305");
    $('#like9').css("display", "none");
    $('#filled_like9').css("display", "inline-flex");
  });
  $('#filled_like9').click(function(){
    delLiked("305");
      $('#like9').css("display", "inline-flex");
      $('#filled_like9').css("display", "none");
  });

  $('#like10').click(function(){
    addLiked("wyg");
    $('#like10').css("display", "none");
    $('#filled_like10').css("display", "inline-flex");
  });
  $('#filled_like10').click(function(){
    delLiked("wyg");
      $('#like10').css("display", "inline-flex");
      $('#filled_like10').css("display", "none");
  });

  $('#like11').click(function(){
    addLiked("str");
    $('#like11').css("display", "none");
    $('#filled_like11').css("display", "inline-flex");
  });
  $('#filled_like11').click(function(){
    delLiked("str");
      $('#like11').css("display", "inline-flex");
      $('#filled_like11').css("display", "none");
  });

  $('#like12').click(function(){
    addLiked("wmyb");
    $('#like12').css("display", "none");
    $('#filled_like12').css("display", "inline-flex");
  });
  $('#filled_like12').click(function(){
    delLiked("wmyb");
      $('#like12').css("display", "inline-flex");
      $('#filled_like12').css("display", "none");
  });

  $('#like13').click(function(){
    addLiked("twiw");
    $('#like13').css("display", "none");
    $('#filled_like13').css("display", "inline-flex");
  });
  $('#filled_like13').click(function(){
    delLiked("twiw");
      $('#like13').css("display", "inline-flex");
      $('#filled_like13').css("display", "none");
  });

  $('#like14').click(function(){
    addLiked("g4u");
    $('#like14').css("display", "none");
    $('#filled_like14').css("display", "inline-flex");
  });
  $('#filled_like14').click(function(){
    delLiked("g4u");
      $('#like14').css("display", "inline-flex");
      $('#filled_like14').css("display", "none");
  });

  $('#like15').click(function(){
    addLiked("sh");
    $('#like15').css("display", "none");
    $('#filled_like15').css("display", "inline-flex");
  });
  $('#filled_like15').click(function(){
    delLiked("sh");
      $('#like15').css("display", "inline-flex");
      $('#filled_like15').css("display", "none");
  });
});  


/* Font */

function setFont(target) {
  /* 
  Changes the fontsize to the target font
  */
  fontSize = target + "px";
  $("body").css({'font-size':fontSize});
  localStorage.setItem('font-size', target);
}

function loadFont() {
  const currentFont = localStorage.getItem('font-size') ? localStorage.getItem('font-size') : null;
  setFont(currentFont);
}

/* Theme */

function setTheme(value) {
  if (value === "default") {
      document.body.classList.remove("dark-mode");
      $(".main").css({'background-color': '#E6DDC4'});  // F0E9D2
      localStorage.setItem('theme', 'default');
  } else if (value === "dark") {
      document.body.classList.add("dark-mode");
      $(".main").css({'background-color': '#0f162d'});
      localStorage.setItem('theme', 'dark');
  }
}

function loadTheme() {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  setTheme(currentTheme);
}


/* MAIN */
loadFont();
loadTheme();