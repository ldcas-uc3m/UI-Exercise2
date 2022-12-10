

function genPlaylist(){

    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    
    playlists = user_cookie[6];
    document.getElementById("playlist_butt").style.color = "#377775";
    document.getElementById("pod_butt").style.color = "white";
    document.getElementById("alb_butt").style.color = "white";
    document.getElementById("art_butt").style.color = "white";

    var target = document.getElementById("myTable");
    target.innerHTML = "<div class='grid-song'><div class='grid2'><div><img class='cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal66RNJGRaNvsBcwWGY8S9rZO5UPXXpAEwg&usqp=CAU' width='150' height='150' onclick=\"goTo('create-playlist.html')\"></div><div class='song-name'><div><b>Create a playlist</b> <br></div></div></div></div>";
    for (let i = 0; i < playlists.length; i++) {
        target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + playlists[i][1] + " width='150' height='150' onclick=\"goToPlaylist('" + i.toString() + "')\"></div><div class='song-name'><div><b>" + playlists[i][0] + "</b> <br></div></div></div></div>";
    }  
}

function genPodcast(){

    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    
    podcasts = user_cookie[7];
    document.getElementById("playlist_butt").style.color = "white";
    document.getElementById("pod_butt").style.color = "#377775";
    document.getElementById("alb_butt").style.color = "white";
    document.getElementById("art_butt").style.color = "white";

    var target = document.getElementById("myTable");
    target.innerHTML = "<div class='grid-song'><div class='grid2'><div><img class='cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal66RNJGRaNvsBcwWGY8S9rZO5UPXXpAEwg&usqp=CAU' width='150' height='150' onclick=\"goTo('upload-podcast.html')\"></div><div class='song-name'><div><b>Create a podcast</b> <br></div></div></div></div>";
    for (let i = 0; i < playlists.length; i++) {
        target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=" + podcasts[i][1] + " width='150' height='150' onclick=\"goToPodcast('" + i.toString() + "')\"></div><div class='song-name'><div><b>" + podcasts[i][0] + "</b> <br></div></div></div></div>";
    }  
}

function genAlbum(){

    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    
    playlists = user_cookie[6];
    document.getElementById("playlist_butt").style.color = "white";
    document.getElementById("pod_butt").style.color = "white";
    document.getElementById("alb_butt").style.color = "#377775";
    document.getElementById("art_butt").style.color = "white";

    var target = document.getElementById("myTable");
    target.innerHTML = "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/pop/girl-of-my-dreams.jpg width='150' height='150'></div><div class='song-name'><div><b>Girl Of My Dreams</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/ts/midnights.jpg width='150' height='150'></div><div class='song-name'><div><b>Midnights</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/pop/sour.jpg width='150' height='150'></div><div class='song-name'><div><b>Sour</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/sm/shawn-mendes.jpg width='150' height='150'></div><div class='song-name'><div><b>Shawn Mendes</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/pop/all-4-nothing.jpg width='150' height='150'></div><div class='song-name'><div><b>All 4 Nothing</b> <br></div></div></div></div>";
}

function genArts(){

    let username = getCookie("username");
    let cookie_text = getCookie(username);
    var user_cookie = JSON.parse(cookie_text);
    
    playlists = user_cookie[6];
    document.getElementById("playlist_butt").style.color = "white";
    document.getElementById("pod_butt").style.color = "white";
    document.getElementById("alb_butt").style.color = "white";
    document.getElementById("art_butt").style.color = "#377775";

    var target = document.getElementById("myTable");
    target.innerHTML = "<div class='grid-song'><div class='grid2'><div><img class='cover' src='img/artist/ts.jpg' width='150' height='150'></div><div class='song-name'><div><b>Taylor Swift</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/artist/hs.jpg width='150' height='150'></div><div class='song-name'><div><b>Harry Styles</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/artist/lauv.jpg width='150' height='150'></div><div class='song-name'><div><b>Lauv</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/artist/dc.jpg width='150' height='150'></div><div class='song-name'><div><b>Dove Cameron</b> <br></div></div></div></div>";
    target.innerHTML += "<div class='grid-song'><div class='grid2'><div><img class='cover' src=img/artist/sm.jpg width='150' height='150'></div><div class='song-name'><div><b>Shawn Mendes</b> <br></div></div></div></div>";
}


function load_lib(){
    loadProfilePic()
    genPlaylist()
}