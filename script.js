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

const message = `
Selamat atas kelulusanmu.

Tidak semua perjalanan berjalan mudah,
tetapi kamu berhasil melewati semuanya.

Terima kasih karena sudah bertahan,
sudah berjuang,
dan sudah menjadi dirimu sendiri.

Hari ini bukan akhir,
melainkan awal dari petualangan baru.

Aku bangga padamu ❤️
`;

let opened = false;

function openLetter(){

    const letter =
    document.getElementById("letterContent");

    if(opened){
        letter.style.display = "none";
        document.getElementById("typingText").innerHTML="";
        opened=false;
        return;
    }

    letter.style.display = "block";

    const text =
    document.getElementById("typingText");

    text.innerHTML="";

    let i=0;

    const typing = setInterval(()=>{

        text.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){
            clearInterval(typing);
        }

    },40);

    opened=true;
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

function toggleMusic(){

    const music =
    document.getElementById("bgMusic");

    const button =
    document.getElementById("musicBtn");

    if(music.paused){

        music.play();

        button.innerHTML =
        "🎵 Musik ON";

    }else{

        music.pause();

        button.innerHTML =
        "🔇 Musik OFF";

    }

}

function openGift(){

    const screen =
    document.getElementById(
        "welcomeScreen"
    );

    screen.style.opacity = "0";

    setTimeout(() => {

        screen.style.display = "none";

    },500);

}