// Hamburger menu open/close

const hamMenu = document.querySelector(".nav_container");
const menu = document.querySelector("nav");
const closeMenu = document.querySelector(".close");

hamMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

closeMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.display = "none";
});

// Previous page button

const backMobile = document.querySelectorAll(".back_button");
const backDesktop = document.querySelector(".back_button-desktop");

backMobile.forEach(function (button) {
  button.addEventListener("click", () => {
    history.back();
  });
});

// Contact page

const form = document.querySelector("form");
const sendButton = document.querySelector(".contact_button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
