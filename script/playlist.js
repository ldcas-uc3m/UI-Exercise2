// Dict to stract information of the image, audio name and artist of each song in playlist
var songs = {
    "mpf_t": "Mr. Perfectly Fine",
    "mpf_s": "Taylor Swift",
    "mpf_i": "img/ts/fearless-tv.jpg",
    "mpf_a": "audio/ts/mr-perfectly-fine.mp3",
    "atw_t": "All Too Well",
    "atw_s": "Taylor Swift",
    "atw_i": "img/ts/red-tv.jpg",
    "atw_a": "audio/ts/all-too-well-tv.mp3",
    "tl_t": "This Love",
    "tl_s": "Taylor Swift",
    "tl_i": "img/ts/1989-tv.jpg",
    "tl_a": "audio/ts/this-love.mp3",
    "pr_t": "Paper Rings",
    "pr_s": "Taylor Swift",
    "pr_i": "img/ts/lover.jpg",
    "pr_a": "audio/ts/paper-rings.mp3",
    "e_t": "Exile",
    "e_s": "Taylor Swift",
    "e_i": "img/ts/folklore.jpg",
    "e_a": "audio/ts/exile.mp3",
    "sti_t": "Stitches",
    "sti_s": "Shawn Mendes",
    "sti_i": "img/sm/handwritten.jpg",
    "sti_a": "audio/sm/stitches.mp3",
    "tnhmb_t": "There's Nothing Holdin' Me Back",
    "tnhmb_s": "Shawn Mendes",
    "tnhmb_i": "img/sm/illuminate.jpg",
    "tnhmb_a": "audio/sm/theres-nothing-holding-me-back.mp3",
    "imb_t": "In My Blood",
    "imb_s": "Shawn Mendes",
    "imb_i": "img/sm/shawn-mendes.jpg",
    "imb_a": "audio/sm/in-my-blood.mp3",
    "305_t": "305",
    "305_s": "Shawn Mendes",
    "305_i": "img/sm/wonder.jpg",
    "305_a": "audio/sm/305.mp3",
    "wyg_t": "When You're Gone",
    "wyb_s": "Shawn Mendes",
    "wyg_i": "img/sm/when-youre-gone.jpg",
    "wyg_a": "audio/sm/when-youre-gone.mp3",
    "str_t": "Stranger",
    "str_s": "Lauv",
    "str_i": "img/pop/all-4-nothing.jpg",
    "str_a": "audio/pop/stranger.mp3",
    "wmyb_t": "What Makes You Beautiful",
    "wmyb_s": "One Direction",
    "wmyb_i": "img/pop/up-all-night.jpg",
    "wmyb_a": "audio/pop/what-makes-you-beautiful.mp3",
    "twiw_t": "That's What I Want",
    "twiw_s": "Lil Nas X",
    "twiw_i": "img/pop/montero.jpg",
    "twiw_a": "audio/pop/thats-what-i-want.mp3",
    "g4u_t": "good 4 u",
    "g4u_s": "Olivia Rodrigo",
    "g4u_i": "img/pop/sour.jpg",
    "g4u_a": "audio/pop/good-4-u.mp3",
    "sh_t": "Serial Heartbreaker",
    "sh_s": "FLETCHER",
    "sh_i": "img/pop/girl-of-my-dreams.jpg",
    "sh_a": "audio/pop/serial-heartbreaker.mp3"
};

// Function to add the songs to the playlist part
function LoadPlaylist(){
    loadProfilePic()
    /* Get User cookie to get Liked songs playlist*/
    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    var playlist_l = user_cookie[6];
    var liked_songs=user_cookie[6][0];

    /* Get playlist info from playlist cookie */
    let playlist_text = getCookie("playlist");
    var playlist = JSON.parse(playlist_text);

    /* Set playlist picture */
    var image = document.getElementById('pict'); 
    image.src=playlist[1];
    image.style.height = "200px";
    image.style.weight = "200px";

    /* Set playlist name */
    var name = document.getElementById('name'); 
    name.innerHTML=playlist[0];

    /* Set playlist creator */
    var user = document.getElementById('username'); 
    user.innerHTML = username;

    /* Set Layout of grid for the number of songs in the  playlist*/
    document.getElementById("playlist").style.gridTemplateRows = "repeat(" + (playlist.length-2) + ", 50px 27px)";

    var target = document.getElementById("playlist");
    target.innerHTML = "";
    /* Create the layout for each song */
    for (let i = 2; i < playlist.length; i++) {
        let audio = songs[playlist[i]+"_a"];
        let code = "<div class='grid-song'><img class='cover-s' src='" 
        + songs[playlist[i]+"_i"] 
        + "' onclick=\"changeSong('" + audio 
        + "')\"></div><div class='info-s-grid'><div class = 'song-name-pl'>" + songs[playlist[i]+"_t"] 
        + "</div><div class = 'song-artist-pl'>" + songs[playlist[i]+"_s"] 
        + "</div></div><div class='menu-song' onclick=\"songFunction('" 
        + (i-2) + "')\" id='menu-song'>...<div class='dropdown-content-s' id='dcs-" 
        + (i-2) +"'>" 
        if (!(liked_songs.includes(playlist[i]))){
          code += "<a href='#' onclick=\"addToLiked('" + playlist[i] + "')\">Add To Liked Songs</a>";
        }
        else{
          code += "<a href='#' onclick=\"delFromLiked('" + playlist[i] + "')\">Remove From Liked Songs</a>";
        }
        code += "<a href='#'>Add To Queue</a>"
        for (let p_i = 1; p_i < playlist_l.length; p_i++) {
          code += "<a href='#' onclick=\"addToPlaylist('" + i + p_i + "')\">Add To Playlist: " + playlist_l[p_i][0] + "</a>"
        }
        // Not allowed in Liked songs
        if (!checkSame(playlist, liked_songs)){
          code += "<a href='#' onclick=\"delFromPlaylist('" + i + "')\">Remove From Playlist</a>"
        }
        code += "<a href='#'>Share</a></div></div><div class='line-pl'></div>";
        target.innerHTML += code;
    }
}


//Add to Liked songs
function addToLiked(song) {
  /* Get playlist info from playlist cookie */
  let playlist_text = getCookie("playlist");
  var playlist = JSON.parse(playlist_text);

  /* Get User cookie to get Liked songs playlist*/
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  var liked_songs=user_cookie[6][0];

  if (checkSame(playlist, liked_songs)) {
    playlist.push(song);
      deleteCookie("playlist");
      setCookie("playlist", JSON.stringify(playlist), 30);
  }
  addLiked(song);
  LoadPlaylist();
}

//Delete From Liked songs
function delFromLiked(song) {
  /* Get playlist info from playlist cookie */
  let playlist_text = getCookie("playlist");
  var playlist = JSON.parse(playlist_text);

  /* Get User cookie to get Liked songs playlist*/
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  var liked_songs=user_cookie[6][0];

  if (checkSame(playlist, liked_songs)) {
    const song_i = playlist.indexOf(song);
    if (song_i > -1) { // only splice array when item is found
      playlist.splice(song_i, 1); // 2nd parameter means remove one item only
      deleteCookie("playlist");
      setCookie("playlist", JSON.stringify(playlist), 30);
    }
  }
  delLiked(song);
  LoadPlaylist();
}

//Add song to a given playlist
function addToPlaylist(i){
  /* Get playlist info from playlist cookie */
  let playlist_text = getCookie("playlist");
  var curr_playlist = JSON.parse(playlist_text);

  /* Get User cookie to get Liked songs playlist*/
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);
  var add_playlist = user_cookie[6][i[1]];

  if (checkSame(curr_playlist, add_playlist)) {
    curr_playlist.push(add_playlist[i[0]]);
    deleteCookie("playlist");
    setCookie("playlist", JSON.stringify(curr_playlist), 30);
  }
  user_cookie[6][i[1]].push(curr_playlist[i[0]]);
  deleteCookie(username);
  setCookie(username, JSON.stringify(user_cookie), 30);

  LoadPlaylist();
}

//Delete song from current playlist
function delFromPlaylist(song_i){
  /* Get playlist info from playlist cookie */
  let playlist_text = getCookie("playlist");
  var curr_playlist = JSON.parse(playlist_text);

  /* Get User cookie to get Liked songs playlist*/
  let username = getCookie("username");
  let cookie_text = getCookie(username);
  var user_cookie = JSON.parse(cookie_text);

  let playlist_i = -1;
  for (let p_i = 1; p_i < user_cookie[6].length; p_i++) {
    if (checkSame(user_cookie[6][p_i], curr_playlist)){
      playlist_i = p_i;
    }
  }

  /* Delete from current playlist */
  curr_playlist.splice(song_i, 1);
  deleteCookie("playlist");
  setCookie("playlist", JSON.stringify(curr_playlist), 30);

  /* Delete from playlist in cookie username */
  user_cookie[6][playlist_i].splice(song_i, 1);
  deleteCookie(username);
  setCookie(username, JSON.stringify(user_cookie), 30);

  LoadPlaylist();
}

// Check if two arrays are the same 
function checkSame(arr1, arr2) {
  let len = arr1.length;
  if (len> arr2.length){
    len = arr2.length;
  }
  for (let i = 0; i < len; i++) {
    if (arr1[i] != arr2[i]){
      return false
    }
  }
  return true
}

//Menu for playlist
function songFunction(num) {
  var dropdowns = document.getElementsByClassName("dropdown-content-s");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    openDropdown.style.display="none";
  }
  document.getElementById("dcs-"+num).style.display="block";
}

// Close all the dropdown if the user clicks outside of it
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
  if (!event.target.matches('.menu-song')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-s");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.style.display="none";
    }
  }
}

