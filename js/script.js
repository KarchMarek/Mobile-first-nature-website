const nav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".menu-toggle");
const iconHamburger = document.querySelector(".menu-toggle i")

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");
    iconHamburger.classList.toggle("fa-bars");
    iconHamburger.classList.toggle("fa-xmark");
});