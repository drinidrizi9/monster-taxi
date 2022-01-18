const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const menu = document.getElementById('menu');
const download = document.getElementById('mobile-download');

burgerOpen.addEventListener('click', () => {
    menu.style.transform = 'var(--animation-open)'
})

burgerClose.addEventListener('click', () => {
    menu.style.transform = 'var(--animation-close)';
})

download.addEventListener('click', () => {
    menu.style.transform = 'var(--animation-close)';
})