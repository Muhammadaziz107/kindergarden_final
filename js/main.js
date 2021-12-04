// const elHumbergerBtn = document.querySelector(".hamburger-btn");
// const elHeader = document.querySelector(".header");
// elHumbergerBtn.addEventListener("click", function () {
//   elHeader.classList.toggle("header--adoptive");
// });
const elSendApplication = document.querySelector(".send_application");
const elModal = document.querySelector(".modal");

elSendApplication.addEventListener("click", evt => {
  console.log("modal");

  if (elModal.classList.contains("modal--active")) {
    elModal.classList.remove("modal--active");
  } else {
    elModal.classList.add("modal--active");
  }
});

elModal.addEventListener("click", evt => {
  if (evt.target.classList.contains("header__modal")) {
    elModal.classList.remove("modal--active");
  }
});
