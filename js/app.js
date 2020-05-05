const togglerButton = document.querySelector(".main-nav__toggle");
const sideNav = document.querySelector(".main-nav__list");
const fade = document.querySelector(".fade");


togglerButton.addEventListener('click', () => {
  sideNav.classList.toggle('active');
  togglerButton.classList.toggle('active');
  fade.classList.toggle('active');
});

fade.addEventListener('click', () => {
  sideNav.classList.remove('active');
  togglerButton.classList.remove('active');
  fade.classList.remove('active');
})