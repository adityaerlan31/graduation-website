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

function createSakura(){

    const sakura =
    document.createElement("div");

    sakura.classList.add("sakura");

    sakura.innerHTML = "🌸";

    sakura.style.left =
    Math.random() * window.innerWidth + "px";

    sakura.style.animationDuration =
    (5 + Math.random() * 5) + "s";

    sakura.style.fontSize =
    (15 + Math.random() * 15) + "px";

    document
    .getElementById("sakura-container")
    .appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    },10000);

}

setInterval(createSakura,500);

function revealOnScroll(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();