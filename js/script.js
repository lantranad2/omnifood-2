const navIcon = document.querySelector(".nav__icons");
const navItems = document.querySelectorAll(".nav__item");
const nav = document.querySelector(".nav");
const body = document.body;

navIcon.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    nav.classList.remove("nav--open");
  });
});
