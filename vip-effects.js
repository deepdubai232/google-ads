// =================================
// DEEP DUBAI VIP EXTRA EFFECTS
// =================================


// Button Click Ripple Effect

document.querySelectorAll(".join-btn").forEach(button=>{


button.addEventListener("click",function(e){


let ripple=document.createElement("span");


ripple.className="ripple";


let rect=this.getBoundingClientRect();


ripple.style.left =
(e.clientX-rect.left)+"px";


ripple.style.top =
(e.clientY-rect.top)+"px";


this.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);



});


});





// Auto Update Year

let year = new Date().getFullYear();


console.log("Deep Dubai VIP "+year);





// Disable Right Click (Optional Protection)

document.addEventListener("contextmenu",function(e){

e.preventDefault();

});





// Smooth Scroll

document.documentElement.style.scrollBehavior="smooth";





// Welcome Message

setTimeout(()=>{


console.log(
"🔥 Welcome to Deep Dubai VIP Channel 🔥"
);


},2000);