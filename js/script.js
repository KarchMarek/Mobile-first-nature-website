const nav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".menu-toggle");
const iconHamburger = document.querySelector(".menu-toggle i");

const navLinks = document.querySelectorAll(".main-nav a");

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");
    iconHamburger.classList.toggle("fa-bars");
    iconHamburger.classList.toggle("fa-xmark");
});

navLinks.forEach(function(link){
    link.addEventListener("click", function(event){

        event.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        target.classList.add("highlight");

        setTimeout(function(){
            target.classList.remove("highlight");
        }, 1000);

        nav.classList.remove("active");
        iconHamburger.classList.remove("fa-xmark");
        iconHamburger.classList.add("fa-bars");
    });
});