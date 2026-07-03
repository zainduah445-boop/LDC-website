function toggleMenu(){

document.getElementById("navLinks")
.classList.toggle("show")

}

document
.getElementById("prayerForm")
.addEventListener("submit",(e)=>{

e.preventDefault()

alert("Prayer request received. God bless you 🙏")

})
/* SCROLL ANIMATION */

ScrollReveal().reveal('.section', {
    distance: '60px',
    duration: 1200,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
})

ScrollReveal().reveal('.hero h1, .hero p, .btn', {
    delay: 300,
    origin: 'top'
})

/* IMAGE POPUP */

function openImage(img){

const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

lightbox.style.display = "flex"
lightboxImg.src = img.src

}

document.getElementById("lightbox").onclick = function(){

this.style.display="none"

}


ScrollReveal().reveal('#about', { 
  duration: 1000, // 1 second
  origin: 'left',
  distance: '50px',
  easing: 'ease-in-out'
});

ScrollReveal().reveal('#events', { 
  duration: 1200,
  origin: 'bottom',
  distance: '50px'
});