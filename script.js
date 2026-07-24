// ==========================
// VIP LOADER
// ==========================

window.addEventListener("load",()=>{

setTimeout(()=>{

let loader = document.getElementById("loader");

loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";

},800);


},1800);


});




// ==========================
// 30 SECOND COUNTDOWN
// ==========================

let seconds = VIP_CONFIG.countdownTime;

let count = document.getElementById("count");


let countdown = setInterval(()=>{


seconds--;


count.textContent = seconds;



if(seconds <= 0){


clearInterval(countdown);


count.textContent = "0";


count.style.color="#ff0000";


count.style.textShadow="0 0 20px red";


}



},1000);






// ==========================
// PARTICLES GOLD EFFECT
// ==========================


particlesJS("particles-js",{


particles:{


number:{

value:70,

density:{

enable:true,

value_area:800

}

},


color:{

value:"#FFD700"

},



shape:{

type:"circle"

},



opacity:{

value:.6

},



size:{

value:3,

random:true

},



line_linked:{


enable:true,

distance:150,

color:"#FFD700",

opacity:.25,

width:1


},



move:{


enable:true,

speed:2,

direction:"none",

random:false,

straight:false,

out_mode:"out"

}



},



interactivity:{


detect_on:"canvas",



events:{


onhover:{

enable:true,

mode:"repulse"

},


onclick:{

enable:true,

mode:"push"

}


},


modes:{


repulse:{

distance:100

},


push:{

particles_nb:4

}


}


},



retina_detect:true


});






// ==========================
// LOGO GOLD GLOW EFFECT
// ==========================


const logo = document.querySelector(".logo");


let glow=true;


setInterval(()=>{


if(glow){


logo.style.boxShadow =
"0 0 25px gold,0 0 60px orange";


}else{


logo.style.boxShadow =
"0 0 15px gold";


}



glow=!glow;



},700);






// ==========================
// BUTTON CLICK EFFECT
// ==========================


const button = document.getElementById("join-btn");

button.addEventListener("click", () => {
    document.getElementById("btn-text").innerText = "OPENING TELEGRAM...";
});






// ==========================
// CARD MOUSE EFFECT
// ==========================


const card=document.querySelector(".card");


document.addEventListener("mousemove",(e)=>{


let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;


card.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;



});




document.addEventListener("mouseleave",()=>{

    card.style.transform="rotateY(0deg) rotateX(0deg)";

});

// ==========================
// CONFIG LOADER
// ==========================

document.title = VIP_CONFIG.pageTitle;

document.getElementById("channel-name").innerHTML =
VIP_CONFIG.heading + " <span>🏆</span>";

document.getElementById("badge").innerText =
VIP_CONFIG.badgeText;

document.getElementById("description").innerText =
VIP_CONFIG.description;

document.getElementById("profile-img").src =
VIP_CONFIG.profileImage;

document.getElementById("loader-text").innerText =
VIP_CONFIG.loaderText.toUpperCase();

document.getElementById("join-btn").href =
VIP_CONFIG.telegramLink;

document.getElementById("btn-text").innerText =
VIP_CONFIG.buttonText;
// Countdown
document.getElementById("count").innerText =
VIP_CONFIG.countdownTime;

// Theme Color
document.documentElement.style.setProperty('--gold', VIP_CONFIG.goldColor);
document.documentElement.style.setProperty('--glow', VIP_CONFIG.glowColor);