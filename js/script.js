// ===============================
// Billionaire Dreamss
// Manifestation Landing Page
// ===============================

// Countdown Timer
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 48);

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll",function(){

    const nav=document.querySelector("header");

    if(!nav) return;

    if(window.scrollY>30){

        nav.classList.add("sticky");

    }else{

        nav.classList.remove("sticky");

    }

});


// ===============================
// Registration Form
// ===============================

const form=document.getElementById("registrationForm");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const mobile=document.getElementById("mobile").value.trim();

    const email=document.getElementById("email").value.trim();

    if(name===""){

        alert("Please Enter Name");

        return;

    }

    if(mobile.length!=10){

        alert("Enter Valid Mobile Number");

        return;

    }

    alert("Registration Successful!");

    form.reset();

});

}


// ===============================
// Reveal Animation
// ===============================

const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveal.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("active");

        }

    });

});


// ===============================
// WhatsApp Button
// ===============================

function openWhatsapp(){

window.open(

"https://wa.me/919999999999?text=Hi%20I%20Want%20To%20Join%20Manifestation%20Masterclass",

"_blank"

);

}


// ===============================
// Join Button
// ===============================

const joinButtons=document.querySelectorAll(".join-btn");

joinButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

document.getElementById("registration")
.scrollIntoView({

behavior:"smooth"

});

});

});
