function updateFont(target) {
    /* 
    Changes the fontsize to the target font
    */
    // var fontSize = parseInt($("body").css("font-size"));
    // diff = target - fontSize
    fontSize = target + "px";
    $("body").css({'font-size':fontSize});
}



function setTheme(value) {
    if (value === "default") {
        document.body.classList.remove("dark-mode");
        $(".main").css({'background-color': '#F0E9D2'});
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