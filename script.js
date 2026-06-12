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

    const envelope =
    document.getElementById("envelope");

    const letter =
    document.getElementById("letterContent");

    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){
        letter.style.display = "block";
    }else{
        letter.style.display = "none";
    }

}

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

const photos = document.querySelectorAll(".photos img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        document.getElementById("lightbox")
        .style.display = "flex";

        document.getElementById("lightbox-img")
        .src = photo.src;

    });

});

function closeLightbox(){

    document.getElementById("lightbox")
    .style.display = "none";

}