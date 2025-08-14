const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Show Menu when the navToggle button is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu when the navClose button is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU ON MOBILE */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));


window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');
    if(window.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
});