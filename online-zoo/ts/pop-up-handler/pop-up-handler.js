const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".btn-cancel");
const donateBtns = document.querySelectorAll(".btn-donate");
const popUp = document.querySelector(".donation-pop-up");
const otherAmountBtn = document.querySelector(".btn-other-amount");
const popUpContainer = document.querySelector(".donation-pop-up-container");
const popUpStep1 = document.querySelector(".donation-pop-up-step-1");
const popUpStep2 = document.querySelector(".donation-pop-up-step-2");
const popUpStep3 = document.querySelector(".donation-pop-up-step-3");
const nextBtnStep1 = document.querySelector(".donation-pop-up-step-1 .btn-next");
const nextBtnStep2 = document.querySelector(".donation-pop-up-step-2 .btn-next");
const completeDonation = document.querySelector(".btn-complete-donation");
const backBtnStep2 = document.querySelector(".donation-pop-up-step-2 .btn-back");
const backBtnStep3 = document.querySelector(".donation-pop-up-step-3 .btn-back");
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
function closePopUp(popUp) {
    popUp.style.display = "none";
    body === null || body === void 0 ? void 0 : body.classList.remove("no-scroll");
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.add("hidden");
}
function showHIdePopUps(closePopUp, showPopUp) {
    closePopUp.style.display = "none";
    showPopUp.style.display = "flex";
}
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
    if (popUpContainer) {
        closePopUp(popUpContainer);
    }
});
otherAmountBtn === null || otherAmountBtn === void 0 ? void 0 : otherAmountBtn.addEventListener("click", () => {
    if (popUp && popUpStep1) {
        showHIdePopUps(popUp, popUpStep1);
    }
});
nextBtnStep1 === null || nextBtnStep1 === void 0 ? void 0 : nextBtnStep1.addEventListener("click", () => {
    if (popUpStep1 && popUpStep2) {
        showHIdePopUps(popUpStep1, popUpStep2);
    }
});
nextBtnStep2 === null || nextBtnStep2 === void 0 ? void 0 : nextBtnStep2.addEventListener("click", () => {
    if (popUpStep2 && popUpStep3) {
        showHIdePopUps(popUpStep2, popUpStep3);
    }
});
completeDonation === null || completeDonation === void 0 ? void 0 : completeDonation.addEventListener("click", () => {
    if (popUpStep3) {
        closePopUp(popUpStep3);
    }
});
backBtnStep2 === null || backBtnStep2 === void 0 ? void 0 : backBtnStep2.addEventListener("click", () => {
    if (popUpStep2 && popUpStep1) {
        showHIdePopUps(popUpStep2, popUpStep1);
    }
});
backBtnStep3 === null || backBtnStep3 === void 0 ? void 0 : backBtnStep3.addEventListener("click", () => {
    if (popUpStep3 && popUpStep2)
        showHIdePopUps(popUpStep3, popUpStep2);
});
export {};
//# sourceMappingURL=pop-up-handler.js.map