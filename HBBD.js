const noBtn=document.getElementById("noBtn");

let count=0;

noBtn.onclick=function(){

count++;

const msgs=[
"Are you sure mudhhuu? 🥺",
"Reallyy Sita? 🥺",
"Think Again 😂",
"You can't escape cuteyyy😏",
"Better Press YES ❤️kandhaa",
"Only YES Works 😍"
];

if(count<5){
noBtn.innerHTML=msgs[count-1];
}

const x=Math.random()*(window.innerWidth-120);

const y=Math.random()*(window.innerHeight-70);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

document.querySelector("button").style.transform = `scale(${1 + count * 0.2})`;
if(count>=5){
noBtn.style.display="none";
}
}

function nextPage(num){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById("page"+num).classList.add("active");

window.scrollTo(0,0);

}
function nextPage(num){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+num).classList.add("active");

    // Hide both buttons by default
    document.querySelector('button[onclick="nextPage(6)"]').style.display = "none";
    document.getElementById("lastBtn").style.display = "none";

    // Show Test Balloons only after the letter page
    if(num === 5){
        document.querySelector('button[onclick="nextPage(6)"]').style.display = "inline-block";
    }

    // Show One Last Surprise only on Balloon page
    if(num === 6){
        document.getElementById("lastBtn").style.display = "inline-block";
    }

    window.scrollTo(0,0);
}
function openLetter(){

    document.getElementById("letterContent").style.display="block";
    document.getElementById("openLetter").style.display="none";

    // Premium animation
    const letter = document.getElementById("letterContent");

    letter.style.opacity = "0";
    letter.style.transform = "translateY(80px) scale(0.8)";
    letter.style.transition = "all 1.2s ease";

    setTimeout(() => {
        letter.style.opacity = "1";
        letter.style.transform = "translateY(0) scale(1)";
    }, 100);

    createHearts();
}
function createHearts() {

    // Only run on Page 5
    if (!document.getElementById("page5").classList.contains("active")) return;

    for (let i = 0; i < 35; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        let duration = 4000 + Math.random() * 3000;
        let drift = Math.random() * 200 - 100;

        heart.animate([
            {
                transform: "translate(0,0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translate(${drift}px,110vh) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "linear"
        });

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index){

    if(slides.length === 0) return;

    if(index >= slides.length) currentSlide = 0;
    if(index < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");

    // Show Open Letter only on the last photo
    const letterBtn = document.getElementById("letterBtnContainer");

    if(currentSlide === slides.length - 1){
        letterBtn.style.display = "block";
    }else{
        letterBtn.style.display = "none";
    }
}
function changeSlide(direction){

    currentSlide += direction;

    // Stop at the last image
    if(currentSlide >= slides.length - 1){
        currentSlide = slides.length - 1;
    }

    // Stop at the first image
    if(currentSlide < 0){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}
let startX = 0;
const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        changeSlide(1); // Swipe left → next
    }

    if (endX - startX > 50) {
        changeSlide(-1); // Swipe right → previous
    }
});
const balloonMessages = [
    "❤️ I Likeew You choo fuckingg Muchh preetyy!",
    "🌹 You're My Princess!",
    "🍫 Free Chocolate Coupon!",
    "🤗 Unlimited Hugs!",
    "😘 u can ask me anything and i buy 4r U!",
    "📸 Our Memories Are My Favourite!",
    "💖 You're My Happiness!",
    "🎁 Surprise Gift Waiting!",
    "👑 Birthday Queen!",
    "💍 Forever i will be with u"
];

let popped = 0;

function popBalloon(balloon){

    const random = Math.floor(Math.random() * balloonMessages.length);

    balloon.innerHTML = "💥";
    balloon.style.pointerEvents = "none";
    balloon.style.transform = "scale(1.5)";
    balloon.style.opacity = "0.3";

    document.getElementById("balloonMessage").innerHTML =
    balloonMessages[random];

    popped++;

    if(popped === 10){

        document.getElementById("balloonMessage").innerHTML =
        "🎉 You popped every balloon! ❤️";

        document.getElementById("lastBtn").style.display = "inline-block";
    }
}
function fireworks(){

    document.getElementById("finalMessage").style.display="flex";

    const text=`One Last time Happiestt Birthdayyy my Sitaaa, My Angel❤️

From the day you came into my life, every ordinary moment became beautiful.

Ur smile gives me peace,
Ur laughter gives me happiness,
and the way u care me ,and ur loyalty melts me everytime😭,

No matter where life takes us,
I promise to stand beside you🫶🏻,
to support you,
to protect you,
and to make you smile whenever I can.

I may not always have the perfect words,
but one thing will never change...

I will always likeew youuu soo muchh with all my heart❤️.

Thank you for being the most beautiful part of my life.

May this birthday bring you endless happiness,
good health,
success,
and all the love you truly deserve.

Once again...

Happiesttt Birthday, My Princess. ❤️🎂

I Likkeeeewwwww Youuuuuu chooooo fuckingggg muchhh Forever. ❤️`;

    let i=0;

    function type(){
        if(i<text.length){
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type,35);
        }
    }

    document.getElementById("typing").innerHTML="";
    type();
}
document.querySelector('button[onclick="nextPage(6)"]').style.display = "none";
document.getElementById("lastBtn").style.display = "none";n").style.display = "none";
