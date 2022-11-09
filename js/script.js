const navIcon = document.querySelector(".nav__icons");
const nav = document.querySelector(".nav");

navIcon.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
});
