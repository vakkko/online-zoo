import { nameRegex, emailRegex } from "../../pages/register/index.js";

const body = document.querySelector<HTMLBodyElement>("body");

const overlay = document.querySelector<HTMLElement>("#overlay");

const closeBtn = document.querySelector<HTMLElement>(".btn-cancel");

const donateBtns = document.querySelectorAll<HTMLButtonElement>(".btn-donate");

const popUp = document.querySelector<HTMLElement>(".donation-pop-up");

const otherAmountBtn = document.querySelector<HTMLElement>(".btn-other-amount");

const popUpContainer = document.querySelector<HTMLElement>(
  ".donation-pop-up-container",
);
const popUpStep1 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-1",
);
const popUpStep2 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-2",
);
const popUpStep3 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-3",
);

const nextBtnStep1 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-1 .btn-next",
);
const nextBtnStep2 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-2 .btn-next",
);
const completeDonation = document.querySelector<HTMLElement>(
  ".btn-complete-donation",
);

const backBtnStep2 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-2 .btn-back",
);
const backBtnStep3 = document.querySelector<HTMLElement>(
  ".donation-pop-up-step-3 .btn-back",
);
const amountQuantities =
  document.querySelector<HTMLElement>(".amount-box > div");
let donationAmountQuantity: null | string = null;
let otherAmount = document.getElementById("amount");
const otherAmountErrMsg = document.getElementById("err-message-amount");
const selectPetContainer = document.getElementById("pet") as HTMLSelectElement;
const otherAmountRegex = /^\d+$/;

const userName = sessionStorage.getItem("name");
const userEmail = sessionStorage.getItem("email");
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const nameError = document.querySelector(".err-msg.name");
const emailError = document.querySelector(".err-msg.email");

const creditCardInput = document.getElementById("card") as HTMLInputElement;
const creditCartError = document.querySelector(".err-msg.card");
const cardRegex = /^[0-9]+$/;

const cvvInput = document.getElementById("cvv") as HTMLInputElement;
const cvvError = document.querySelector(".err-msg.cvv");

donateBtns.forEach((btn) => {
  if (popUpContainer && popUp && body && overlay) {
    btn.addEventListener("click", () => {
      popUpContainer.style.display = "block";
      popUp.style.display = "block";
      body.classList.add("no-scroll");
      overlay.classList.remove("hidden");
    });
  }
});

function closePopUp(popUp: HTMLElement): void {
  popUp.style.display = "none";
  body?.classList.remove("no-scroll");
  overlay?.classList.add("hidden");
}

function showHIdePopUps(closePopUp: HTMLElement, showPopUp: HTMLElement): void {
  closePopUp.style.display = "none";
  showPopUp.style.display = "flex";
}

closeBtn?.addEventListener("click", () => {
  if (popUpContainer) {
    closePopUp(popUpContainer);
  }
});

otherAmountBtn?.addEventListener("click", () => {
  if (popUp && popUpStep1) {
    showHIdePopUps(popUp, popUpStep1);
  }
});

nextBtnStep1?.addEventListener("click", () => {
  if (popUpStep1 && popUpStep2) {
    showHIdePopUps(popUpStep1, popUpStep2);
    validateStep1();
  }
});

nextBtnStep2?.addEventListener("click", () => {
  if (popUpStep2 && popUpStep3) {
    showHIdePopUps(popUpStep2, popUpStep3);
  }
});

completeDonation?.addEventListener("click", () => {
  if (popUpStep3) {
    closePopUp(popUpStep3);
  }
});

backBtnStep2?.addEventListener("click", () => {
  if (popUpStep2 && popUpStep1) {
    showHIdePopUps(popUpStep2, popUpStep1);
  }
});

backBtnStep3?.addEventListener("click", () => {
  if (popUpStep3 && popUpStep2) showHIdePopUps(popUpStep3, popUpStep2);
});

amountQuantities?.addEventListener("click", (event) => {
  const target = event.target as HTMLButtonElement;
  if (target.value) {
    donationAmountQuantity = target.value;
    validateStep1();
  }
});

otherAmount?.addEventListener("blur", (e) => {
  const input = e.target as HTMLInputElement;
  if (!otherAmountRegex.test(input.value)) {
    otherAmountErrMsg?.classList.remove("hidden");
    donationAmountQuantity = null;
  } else {
    otherAmountErrMsg?.classList.add("hidden");
  }
  validateStep1();
});

selectPetContainer?.addEventListener("change", () => {
  if (selectPetContainer?.value) {
    validateStep1();
  }
});

function validateStep1() {
  const hasAmount =
    donationAmountQuantity !== null ||
    (otherAmount as HTMLInputElement).value !== "";

  const hasPet = selectPetContainer && selectPetContainer.value !== "";

  if (nextBtnStep1) {
    (nextBtnStep1 as HTMLButtonElement).disabled = !(hasAmount && hasPet);
  }
}

function validateStep2() {
  const validName = nameRegex.test(nameInput.value);
  const validEmail = emailRegex.test(emailInput.value);

  (nextBtnStep2 as HTMLButtonElement).disabled = !(validName && validEmail);
}

if (userName && userEmail) {
  if (nameInput) nameInput.value = userName;
  if (emailInput) emailInput.value = userEmail;
  validateStep2();
}

nameInput.addEventListener("blur", () => {
  const nameInputValue = nameInput.value;
  if (!nameRegex.test(nameInputValue)) {
    nameError?.classList.remove("hidden");
  } else {
    nameError?.classList.add("hidden");
  }
  validateStep2();
});

emailInput.addEventListener("blur", () => {
  const emailInputValue = emailInput.value;
  if (!emailRegex.test(emailInputValue)) {
    emailError?.classList.remove("hidden");
  } else {
    emailError?.classList.add("hidden");
  }
  validateStep2();
});

creditCardInput.addEventListener("blur", () => {
  const creditCardInputValue = creditCardInput.value;
  const splited = creditCardInputValue.split("");

  if (
    (!cardRegex.test(creditCardInputValue) || splited.length < 16) &&
    creditCartError
  ) {
    creditCartError?.classList.remove("hidden");
  } else {
    creditCartError?.classList.add("hidden");
  }
});

cvvInput?.addEventListener("blur", () => {
  const cvvInputValue = cvvInput.value;
  const splited = cvvInputValue?.split("");

  if (!cardRegex.test(cvvInputValue) || (splited.length < 3 && cvvError)) {
    cvvError?.classList.remove("hidden");
  } else {
    cvvError?.classList.add("hidden");
  }
});
