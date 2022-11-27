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
    "tnhmb_t": "There's Nothing Holdin' <br> Me Back",
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

var playlist = []

// Function to check if a string matches a regular expression
function checkReg (string, re) {
    // Get the value of the input field with id="numb"
    var re = new RegExp(re);
    if (re.test(string)) {
        return true;
    }
    return false;
}

// Function to load songd to the playlist part
function LoadPlaylist(){
    for (let i = 0; i < playlist.length; i++) {
        var target = document.getElementById("myPlaylist");
        let audio = songs[playlist[i]+"_a"];
        target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + songs[playlist[i]+"_i"] + " width='150' height='150' onclick=\"changeSong('" + audio + "')\"></div><div class='song-name'><div><b>" + songs[playlist[i]+"_t"] + "</b> <br>" + songs[playlist[i]+"_s"] + "</div></div></div></div>";
    }
}

// When click on a song it is added to playlist
function addToPlaylist(song){
    playlist.push(song);
    var target = document.getElementById("myPlaylist");
    target.innerHTML = "";
    LoadPlaylist();
}

// Funtion to validate playlist name and creation of it in the user cookie
function createPlaylist(){
    let def_pic = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9398c530-d0a7-4c46-99b4-423a6aabf39f/d3kxnbe-f16dabfb-0cf1-436c-9315-915fbe462f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkzOThjNTMwLWQwYTctNGM0Ni05OWI0LTQyM2E2YWFiZjM5ZlwvZDNreG5iZS1mMTZkYWJmYi0wY2YxLTQzNmMtOTMxNS05MTVmYmU0NjJmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gk0TAQTWUZBrHFjRC0y7pMEEdep95g7p6upVZNpXaZg"
    let play_pict = document.getElementById("pict").value;
    let play_name = document.getElementById("name").value;
    if (play_name == ""){
        let output = "Playlist must have a name";
        document.getElementById("demo").innerHTML = output;
    }else{
        if (play_pict == ""){
            play_pict = def_pic;
        }
        let username = getCookie("username");
        let cookie_text = getCookie(username);
        var user_cookie = JSON.parse(cookie_text);
        user_cookie[6].push([play_name, play_pict].concat(playlist));
        deleteCookie(username);
        setCookie(username, JSON.stringify(user_cookie), 30);
        window.location.href = "main-page-after-login.html";
    }
}