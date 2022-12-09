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

// Function to add the songs to the playlist part
function LoadPlaylist(){
    loadProfilePic()
    let username = getCookie("username");
    let playlist_text = getCookie("playlist");
    var playlist = JSON.parse(playlist_text);
    var image = document.getElementById('pict'); 
    image.src=playlist[1];
    image.style.height = "200px";
    image.style.weight = "200px";
    var name = document.getElementById('name'); 
    name.innerHTML=playlist[0];
    var user = document.getElementById('username'); 
    user.innerHTML = username;

    for (let i = 2; i < playlist.length; i++) {
        var target = document.getElementById("playlist");
        let audio = songs[playlist[i]+"_a"];
        target.innerHTML += "<div class='grid-song'><img class='cover' src='" 
        + songs[playlist[i]+"_i"] 
        + "' onclick=\"changeSong('" + audio + "')\"></div><div class='grid2'><div class = 'song-name'>" + songs[playlist[i]+"_t"] 
        + "</div><div class = 'song-artist'>" + songs[playlist[i]+"_s"] 
        + "</div></div><div class='menu-song'>...</div><div class='line'></div>";
    }
}