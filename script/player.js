// map the song names and the cover images, song name, and artist
const songs = {
    "this-love": [
        "img/ts/1989-tv.jpg",
        "All too well",
        "Taylor Swift",
        "audio/ts/this-love.mp3"
    ],
    "mr-perfectly-fine": [
        "img/ts/fearless-tv.jpg",
        "Mr. Perfectly Fine",
        "Taylor Swift"
    ],
    "all-too-well-tv": [
        "img/ts/red-tv.jpg",
        "All Too Well",
        "Taylor Swift"
    ],
    "paper-rings": [
        "img/ts/lover.jpg",
        "Paper Rings",
        "Taylor Swift"
    ],
    "exile": [
        "img/ts/folklore.jpg",
        "Exile",
        "Taylor Swift"
    ],
    "stitches": [
        "img/sm/handwritten.jpg",
        "Stiches",
        "Shawn Mendes"
    ],
    "theres-nothing-holding-me-back": [
        "img/sm/illuminate.jpg",
        "There's Nothing Holdin' Me Back",
        "Shawn Mendes"
    ],
    "in-my-blood": [
        "img/sm/shawn-mendes.jpg",
        "In My Blood",
        "Shawn Mendes"
    ],
    "305": [
        "img/sm/wonder.jpg",
        "305",
        "Shawn Mendes"
    ],
    "when-youre-gone": [
        "img/sm/when-youre-gone.jpg",
        "When You're Gone",
        "Shawn Mendes"
    ],
    "stranger": [
        "img/pop/all-4-nothing.jpg",
        "Stranger",
        "Lauv"
    ],
    "what-makes-you-beautiful": [
        "img/pop/up-all-night.jpg",
        "What Makes You Beautiful",
        "One Direction"
    ],
    "thats-what-i-want": [
        "img/pop/montero.jpg",
        "That's What I Want",
        "Lil Nas X"
    ],
    "good-4-u": [
        "img/pop/sour.jpg",
        "good 4 u",
        "Olivia Rodrigo"
    ],
    "serial-heartbreaker": [
        "img/pop/girl-of-my-dreams.jpg",
        "Serial Heartbreaker",
        "FLETCHER"
    ],
    "default" : [
        "img/logo.png",
        "default",
        "default"
    ]
};

function setSong() {
    var song = songs[localStorage.getItem('curr-song') ? localStorage.getItem('curr-song') : "default"];

    $("#song-cover").attr("src", song[0]);
    $("#song-name").text(song[1]);
    $("#song-artist").text(song[2]);
    $("#url").text(song[3]);
}


// set background colors
document.body.classList.add("dark-mode");
$(".main").css({'background-color': '#19223b'});

setSong();