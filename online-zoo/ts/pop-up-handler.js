const body = document.body;

const overlay = document.querySelector("#overlay");

const closeBtn = document.querySelector(".btn-cancel");

const donateBtns = document.querySelectorAll(".btn-donate");

const popUp = document.querySelector(".donation-pop-up");

const otherAmountBtn = document.querySelector(".btn-other-amount");

const popUpContainer = document.querySelector(".donation-pop-up-container");
const popUpStep1 = document.querySelector(".donation-pop-up-step-1");
const popUpStep2 = document.querySelector(".donation-pop-up-step-2");
const popUpStep3 = document.querySelector(".donation-pop-up-step-3");

const nextBtnStep1 = document.querySelector(
  ".donation-pop-up-step-1 .btn-next",
);
const nextBtnStep2 = document.querySelector(
  ".donation-pop-up-step-2 .btn-next",
);
const completeDonation = document.querySelector(".btn-complete-donation");

const backBtnStep2 = document.querySelector(
  ".donation-pop-up-step-2 .btn-back",
);
const backBtnStep3 = document.querySelector(
  ".donation-pop-up-step-3 .btn-back",
);

donateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popUpContainer.style.display = "block";
    popUp.style.display = "block";
    body.classList.add("no-scroll");
    overlay.classList.remove("hidden");
  });
});

function closePopUp(popUp) {
  popUp.style.display = "none";
  body.classList.remove("no-scroll");
  overlay.classList.add("hidden");
}

function showHIdePopUps(popUp1, popUp2) {
  popUp1.style.display = "none";
  popUp2.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  closePopUp(popUpContainer);
});

otherAmountBtn.addEventListener("click", () => {
  showHIdePopUps(popUp, popUpStep1);
});

nextBtnStep1.addEventListener("click", () => {
  showHIdePopUps(popUpStep1, popUpStep2);
});

nextBtnStep2.addEventListener("click", () => {
  showHIdePopUps(popUpStep2, popUpStep3);
});

completeDonation.addEventListener("click", () => {
  closePopUp(popUpStep3);
});

backBtnStep2.addEventListener("click", () => {
  showHIdePopUps(popUpStep2, popUpStep1);
});
backBtnStep3.addEventListener("click", () => {
  showHIdePopUps(popUpStep3, popUpStep2);
});
