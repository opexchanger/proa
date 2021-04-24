const closeButton = document.querySelector('.nav__btn-close');
const openButton = document.querySelector('.nav__btn-open');
const nav = document.querySelector('.nav');

closeButton.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
    nav.classList.add('navigation-open');
});
