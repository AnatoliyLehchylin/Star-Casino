const burgerButton = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');

burgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    burgerNav.classList.toggle('active');
    burgerButton.classList.toggle('disable')
});

document.addEventListener('click', (event) => {
    if (!burgerNav.contains(event.target)) {
        burgerNav.classList.remove('active');
        burgerButton.classList.remove('disable');
    }
});