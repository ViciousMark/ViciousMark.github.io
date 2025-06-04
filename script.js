// Menu Mobile
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuMobile = document.getElementById('menuMobile');

openMenu.addEventListener('click', () => {
    menuMobile.style.right = '0';
});

closeMenu.addEventListener('click', () => {
    menuMobile.style.right = '-100%';
});

// Fechar menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu-mobile a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.style.right = '-100%';
    });
});