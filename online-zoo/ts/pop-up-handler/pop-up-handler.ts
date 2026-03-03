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
