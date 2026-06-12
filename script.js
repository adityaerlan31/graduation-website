function scrollToGallery(){
document
.getElementById("gallery")
.scrollIntoView({
behavior:"smooth"
});
document
.getElementById("bgMusic")
.play();
}

function openLetter(){

    document
    .getElementById("letterContent")
    .style.display = "block";

}

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}