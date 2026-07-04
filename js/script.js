/* =====================================================
   Manifest Masterclass Landing Page
   script.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       COUNTDOWN TIMER
    ========================================== */

    // Date बदल: Month 0-based आहे (6 = July)
    const targetDate = new Date("2026-07-10T14:00:00").getTime();

    const timer = setInterval(() => {

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timer);

            ["days","hours","minutes","seconds"].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = "00";
            });

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setValue("days", days);
        setValue("hours", hours);
        setValue("minutes", minutes);
        setValue("seconds", seconds);

    }, 1000);

    function setValue(id, value) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = String(value).padStart(2, "0");
        }
    }

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector("i");

            document.querySelectorAll(".faq-answer").forEach(item => {

                if (item !== answer) {
                    item.style.display = "none";
                }

            });

            document.querySelectorAll(".faq-question i").forEach(i => {
                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");
            });

            if (answer.style.display === "block") {

                answer.style.display = "none";

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            } else {

                answer.style.display = "block";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                window.scrollTo({

                    top: target.offsetTop - 80,

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       STICKY HEADER SHADOW
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

        }else{

            header.style.boxShadow = "none";

        }

    });

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll(".counter-box h2");

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = Math.max(10, Math.floor(target / 80));

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

    /* ==========================================
       HERO BUTTON EFFECT
    ========================================== */

    document.querySelectorAll(".btn-primary").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px) scale(1.02)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0) scale(1)";

        });

    });

});
