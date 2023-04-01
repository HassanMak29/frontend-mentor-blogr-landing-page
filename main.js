import "./style.css";

const body = document.querySelector("body");
const navItems = document.querySelectorAll("header nav span");
const options = document.querySelectorAll("header nav a");
const arrows = document.querySelectorAll("header nav .arrow-down");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const burgerMenu = document.querySelector(".nav-wrapper");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("option-open");
    item.parentNode.querySelector(".options").classList.toggle("options-open");
    item.parentNode.querySelector("svg").classList.toggle("arrow-down-open");
  });
});

arrows.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.querySelector(".options").classList.toggle("options-open");
    item.parentNode.querySelector("svg").classList.toggle("arrow-down-open");
  });
});

menuIcon.addEventListener("click", () => {
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  burgerMenu.style.visibility = "visible";
  burgerMenu.style.opacity = 1;
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
  burgerMenu.style.visibility = "hidden";
  burgerMenu.style.opacity = 0;
  navItems.forEach((item) => {
    item.classList.remove("option-open");
    item.parentNode.querySelector(".options").classList.remove("options-open");
    item.parentNode.querySelector("svg").classList.remove("arrow-down-open");
  });
});

burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  navItems.forEach((item) => {
    if (e.target !== item && !Array.from(options).includes(e.target)) {
      item.classList.remove("option-open");
      item.parentNode
        .querySelector(".options")
        .classList.remove("options-open");
      item.parentNode.querySelector("svg").classList.remove("arrow-down-open");
    }
  });
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    burgerMenu.style.visibility = "hidden";
    burgerMenu.style.opacity = 0;
  });
});

body.addEventListener("click", (e) => {
  if (e.target !== menuIcon) {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    burgerMenu.style.visibility = "hidden";
    burgerMenu.style.opacity = 0;
  }
});
