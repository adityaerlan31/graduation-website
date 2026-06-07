function scrollToGallery(){
document
.getElementById("gallery")
.scrollIntoView({
behavior:"smooth"
});
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