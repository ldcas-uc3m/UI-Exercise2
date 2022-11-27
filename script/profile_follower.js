
// Function to load the values of the follower opened
function loadUserInfo(){
    loadProfilePic()
    let follower_text = getCookie("follower");
    var follower = JSON.parse(follower_text);
    var image = document.getElementById('profile_picture'); 
    image.src=follower[1];
    var name = document.getElementById('username'); 
    name.innerHTML=follower[0];

}