// const elHumbergerBtn = document.querySelector(".hamburger-btn");
// const elHeader = document.querySelector(".header");

// elHumbergerBtn.addEventListener("click", function () {
//   elHeader.classList.toggle("header--adoptive");
// });
const elClosedBtn = document.querySelector(".closed "),
  elMenu = document.querySelector("#menu"),
  elHamburger = document.querySelector(".hamburger");

elHamburger.addEventListener("click", () => {
  elMenu.style.padding = "25px";
  elMenu.style.width = "330px";
});
elClosedBtn.addEventListener("click", () => {
  elMenu.style.padding = "0px";
  elMenu.style.width = "0px";
});
