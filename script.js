/* =====================================================
   MEDINEX - MAIN JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.innerHTML = "☰";
        }

    });

});


/* ================= SCROLL HEADER EFFECT ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(23, 59, 74, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= CURRENT YEAR ================= */

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

});


/* ================= BUTTON CLICK FEEDBACK ================= */

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.97)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});


/* ================= FEATURE CARD EFFECT ================= */

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.cursor = "pointer";

    });

});


/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("MediNex website loaded successfully.");

});


document.addEventListener("DOMContentLoaded", function () {

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".service-box");

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";

        setTimeout(function () {

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});



