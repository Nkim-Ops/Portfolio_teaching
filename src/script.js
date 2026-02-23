document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        nav.classList.toggle('active');
        
        // Optional: Animate burger to 'X'
        burger.classList.toggle('toggle');
    });
});