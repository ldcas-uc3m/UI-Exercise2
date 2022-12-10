// set fontsize on the slider
const currentFont = localStorage.getItem('font-size') ? localStorage.getItem('font-size') : null;
if (currentFont !== null) {
    $("#font-size-slider").slider({
        value: currentFont
    });
}