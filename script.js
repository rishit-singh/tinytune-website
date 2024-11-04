document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar2');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
});