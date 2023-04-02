import "./style.css";

const body = document.querySelector("body");
const navItems = document.querySelectorAll(".nav-element");
const options = document.querySelectorAll("header nav a");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const burgerMenu = document.querySelector(".nav-wrapper");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector("span").classList.toggle("option-open");
    item.querySelector(".options").classList.toggle("options-open");
    item.querySelector("svg").classList.toggle("arrow-down-open");
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
    console.log(e.target, item);
    if (
      e.target !== item &&
      e.target !== item.querySelector("span") &&
      e.target !== item.querySelector("svg") &&
      !Array.from(options).includes(e.target)
    ) {
      item.querySelector("span").classList.remove("option-open");
      item.querySelector(".options").classList.remove("options-open");
      item.querySelector("svg").classList.remove("arrow-down-open");
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
