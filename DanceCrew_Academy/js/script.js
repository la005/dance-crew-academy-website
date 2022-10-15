"use strict";

const classModal = document.querySelector(".class-modal");
const tourModal = document.querySelector(".tour-modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".button-close-modal");
const buttonsOpenModal = document.querySelectorAll(".button-open-modal");
const buttonsOpenTourModal = document.querySelectorAll(
  ".button-open-tour-modal"
);
const buttonCloseTourModal = document.querySelector(".button-close-tour-modal");

const buttonsOpenSchedule = document.querySelectorAll(".button-open-schedule");
const buttonCloseSchedule = document.querySelector(".button-close-schedule");

/////////////////
// Class Registration Modal
const openClassModal = function (e) {
  e.preventDefault();
  classModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeClassModal = function () {
  classModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonsOpenModal.forEach((btn) =>
  btn.addEventListener("click", openClassModal)
);

buttonCloseModal.addEventListener("click", closeClassModal);

overlay.addEventListener("click", closeClassModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !classModal.classList.contains("hidden")) {
    closeClassModal();
  }
});

/////////////////
// Music Tour Modal

const openTourModal = function (e) {
  e.preventDefault();
  tourModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

buttonsOpenTourModal.forEach((btn) =>
  btn.addEventListener("click", openTourModal)
);
const closeTourModal = function () {
  tourModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonCloseTourModal.addEventListener("click", closeTourModal);

overlay.addEventListener("click", closeTourModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !tourModal.classList.contains("hidden")) {
    closeClassModal();
  }
});

("use strict");

//////////////////////////////////////////////
// Set current copyright year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
