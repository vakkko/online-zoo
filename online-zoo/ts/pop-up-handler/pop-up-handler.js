var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BASE_URL } from "../../consts/consts.js";
import { fetchData } from "../../utils/fetch/fetch.js";
import { nameRegex, emailRegex } from "../../pages/register/index.js";
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
const popUpStep4 = document.querySelector(".donation-pop-up-step-4");
const nextBtnStep1 = document.querySelector(".donation-pop-up-step-1 .btn-next");
const nextBtnStep2 = document.querySelector(".donation-pop-up-step-2 .btn-next");
const completeDonation = document.querySelector(".btn-complete-donation");
const backBtnStep2 = document.querySelector(".donation-pop-up-step-2 .btn-back");
const backBtnStep3 = document.querySelector(".donation-pop-up-step-3 .btn-back");
const amountQuantities = document.querySelector(".amount-box > div");
let donationAmountQuantity = null;
let otherAmount = document.getElementById("amount");
const otherAmountErrMsg = document.getElementById("err-message-amount");
const selectPetContainer = document.getElementById("pet");
const otherAmountRegex = /^\d+$/;
const userName = sessionStorage.getItem("name");
const userEmail = sessionStorage.getItem("email");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.querySelector(".err-msg.name");
const emailError = document.querySelector(".err-msg.email");
const creditCardInput = document.getElementById("card");
const creditCartError = document.querySelector(".err-msg.card");
const cardRegex = /^[0-9]+$/;
const cvvInput = document.getElementById("cvv");
const cvvError = document.querySelector(".err-msg.cvv");
const dateObj = new Date();
const currentYear = dateObj.getFullYear();
const cardYear = document.getElementById("card-year");
const cardMonth = document.getElementById("card-month");
const saveCardCheckBox = document.getElementById("save-card-checkbox");
const savedCards = document.getElementById("saved-cards");
const savedCardsContainer = document.querySelector(".select-container.saved-card");
const donationRequestMsg = document.querySelector(".donation-request-msg");
const closeStep4 = document.querySelector(".btn-cancel-step4");
const step1ErrMsg = document.querySelector(".err-msg.step-1");
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
        validateStep1();
    }
});
nextBtnStep2 === null || nextBtnStep2 === void 0 ? void 0 : nextBtnStep2.addEventListener("click", () => {
    if (popUpStep2 && popUpStep3) {
        showHIdePopUps(popUpStep2, popUpStep3);
    }
});
completeDonation === null || completeDonation === void 0 ? void 0 : completeDonation.addEventListener("click", () => {
    if (popUpStep3 && popUpStep4) {
        sendPetData();
        showHIdePopUps(popUpStep3, popUpStep4);
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
if (!(popUpStep1 === null || popUpStep1 === void 0 ? void 0 : popUpStep1.classList.contains("hidden"))) {
    function getAnimals() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield fetchData(`${BASE_URL}/pets`);
                step1ErrMsg === null || step1ErrMsg === void 0 ? void 0 : step1ErrMsg.classList.add("hidden");
                data.forEach((animal) => {
                    const optionValue = animal.name + ", " + animal.commonName;
                    const option = new Option(optionValue);
                    option.setAttribute("value", String(animal.id));
                    selectPetContainer.append(option);
                });
            }
            catch (err) {
                step1ErrMsg === null || step1ErrMsg === void 0 ? void 0 : step1ErrMsg.classList.remove("hidden");
            }
        });
    }
    getAnimals();
}
amountQuantities === null || amountQuantities === void 0 ? void 0 : amountQuantities.addEventListener("click", (event) => {
    const target = event.target;
    if (target.value) {
        donationAmountQuantity = target.value;
        validateStep1();
    }
});
otherAmount === null || otherAmount === void 0 ? void 0 : otherAmount.addEventListener("blur", (e) => {
    const input = e.target;
    if (!otherAmountRegex.test(input.value)) {
        otherAmountErrMsg === null || otherAmountErrMsg === void 0 ? void 0 : otherAmountErrMsg.classList.remove("hidden");
        donationAmountQuantity = null;
    }
    else {
        otherAmountErrMsg === null || otherAmountErrMsg === void 0 ? void 0 : otherAmountErrMsg.classList.add("hidden");
    }
    validateStep1();
});
selectPetContainer === null || selectPetContainer === void 0 ? void 0 : selectPetContainer.addEventListener("change", () => {
    if (selectPetContainer === null || selectPetContainer === void 0 ? void 0 : selectPetContainer.value) {
        validateStep1();
    }
});
function validateStep1() {
    const hasAmount = donationAmountQuantity !== null ||
        otherAmount.value !== "";
    const hasPet = selectPetContainer && selectPetContainer.value !== "";
    nextBtnStep1.disabled = !(hasAmount && hasPet);
}
function validateStep2() {
    const validName = nameRegex.test(nameInput.value);
    const validEmail = emailRegex.test(emailInput.value);
    nextBtnStep2.disabled = !(validName && validEmail);
}
if (userName && userEmail) {
    if (nameInput)
        nameInput.value = userName;
    if (emailInput)
        emailInput.value = userEmail;
    validateStep2();
    savedCardsContainer === null || savedCardsContainer === void 0 ? void 0 : savedCardsContainer.classList.remove("hidden");
    const savedCardsFromStorage = localStorage.getItem("savedCards");
    if (savedCardsFromStorage) {
        const parsedSavedCard = JSON.parse(savedCardsFromStorage);
        parsedSavedCard.forEach((card) => {
            const option = new Option(card.maskedNumber);
            option.setAttribute("value", card.maskedNumber);
            savedCards === null || savedCards === void 0 ? void 0 : savedCards.append(option);
        });
    }
}
nameInput.addEventListener("blur", () => {
    const nameInputValue = nameInput.value;
    if (!nameRegex.test(nameInputValue)) {
        nameError === null || nameError === void 0 ? void 0 : nameError.classList.remove("hidden");
    }
    else {
        nameError === null || nameError === void 0 ? void 0 : nameError.classList.add("hidden");
    }
    validateStep2();
});
emailInput.addEventListener("blur", () => {
    const emailInputValue = emailInput.value;
    if (!emailRegex.test(emailInputValue)) {
        emailError === null || emailError === void 0 ? void 0 : emailError.classList.remove("hidden");
    }
    else {
        emailError === null || emailError === void 0 ? void 0 : emailError.classList.add("hidden");
    }
    validateStep2();
});
creditCardInput.addEventListener("blur", () => {
    const creditCardInputValue = creditCardInput.value;
    const splited = creditCardInputValue.split("");
    if ((!cardRegex.test(creditCardInputValue) || splited.length < 16) &&
        creditCartError) {
        creditCartError === null || creditCartError === void 0 ? void 0 : creditCartError.classList.remove("hidden");
    }
    else {
        creditCartError === null || creditCartError === void 0 ? void 0 : creditCartError.classList.add("hidden");
    }
    validateStep3();
});
cvvInput === null || cvvInput === void 0 ? void 0 : cvvInput.addEventListener("blur", () => {
    const cvvInputValue = cvvInput.value;
    const splited = cvvInputValue === null || cvvInputValue === void 0 ? void 0 : cvvInputValue.split("");
    if (!cardRegex.test(cvvInputValue) || (splited.length < 3 && cvvError)) {
        cvvError === null || cvvError === void 0 ? void 0 : cvvError.classList.remove("hidden");
    }
    else {
        cvvError === null || cvvError === void 0 ? void 0 : cvvError.classList.add("hidden");
    }
    validateStep3();
});
if (!(popUpStep3 === null || popUpStep3 === void 0 ? void 0 : popUpStep3.classList.contains("hidden"))) {
    for (let i = 4; i >= 0; i--) {
        const year = String(currentYear - i);
        const option = new Option(year);
        option.setAttribute("value", year);
        cardYear === null || cardYear === void 0 ? void 0 : cardYear.append(option);
    }
    for (let i = 1; i <= 7; i++) {
        const year = String(currentYear + i);
        const option = new Option(year);
        option.setAttribute("value", year);
        cardYear === null || cardYear === void 0 ? void 0 : cardYear.append(option);
    }
    if (userName && userEmail) {
        saveCardCheckBox === null || saveCardCheckBox === void 0 ? void 0 : saveCardCheckBox.classList.remove("hidden");
    }
    else {
        saveCardCheckBox === null || saveCardCheckBox === void 0 ? void 0 : saveCardCheckBox.classList.add("hidden");
    }
}
cardMonth.addEventListener("change", () => {
    validateStep3();
});
cardYear.addEventListener("change", () => {
    validateStep3();
});
function saveCard() {
    const isValid = validateStep3();
    if (!isValid)
        return;
    const number = creditCardInput.value;
    const masked = `${number.slice(0, 4)}********${number.slice(-4)}`;
    const cvv = cvvInput.value;
    const year = cardYear.value;
    const month = cardMonth.value;
    const newCard = {
        maskedNumber: masked,
        cvv,
        month,
        year,
    };
    const existingCardsRaw = localStorage.getItem("savedCards");
    const cards = existingCardsRaw
        ? JSON.parse(existingCardsRaw)
        : [];
    cards.push(newCard);
    localStorage.setItem("savedCards", JSON.stringify(cards));
}
function validateStep3() {
    const validCreditCardNumber = cardRegex.test(creditCardInput.value) &&
        creditCardInput.value.split("").length === 16;
    const validCvv = cardRegex.test(cvvInput.value) && cvvInput.value;
    const yearValue = cardYear.value;
    const monthValue = cardMonth.value;
    const isValid = !!(validCreditCardNumber &&
        validCvv &&
        yearValue &&
        monthValue);
    completeDonation.disabled = !isValid;
    return isValid;
}
saveCardCheckBox === null || saveCardCheckBox === void 0 ? void 0 : saveCardCheckBox.addEventListener("change", (event) => {
    const target = event.target;
    if (target.checked) {
        saveCard();
    }
});
savedCards === null || savedCards === void 0 ? void 0 : savedCards.addEventListener("change", (event) => {
    const target = event.target;
    const cardNumber = target.value;
    const savedCardsFromStorage = localStorage.getItem("savedCards");
    if (savedCardsFromStorage) {
        const parsedSavedCard = JSON.parse(savedCardsFromStorage);
        const card = parsedSavedCard.find((creditCard) => creditCard.maskedNumber === cardNumber);
        if (card) {
            creditCardInput.value = card.maskedNumber;
            cvvInput.value = card.cvv;
            cardMonth.value = card.month;
            cardYear.value = card.year;
        }
    }
});
function sendPetData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const finalAmount = Number(otherAmount.value || donationAmountQuantity);
            const name = userName ? userName : nameInput.value;
            const email = userEmail ? userEmail : emailInput.value;
            const requestBody = {
                name,
                email,
                amount: finalAmount,
                petId: Number(selectPetContainer.value),
            };
            const response = yield fetch(`${BASE_URL}/donation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok)
                throw new Error("Failed to fetch");
            const { data } = yield response.json();
            if (data && donationRequestMsg)
                donationRequestMsg.textContent = data.message;
        }
        catch (err) {
            console.error(err);
            if (donationRequestMsg)
                donationRequestMsg.textContent =
                    "Something went wrong. Please, try again later.";
        }
    });
}
closeStep4 === null || closeStep4 === void 0 ? void 0 : closeStep4.addEventListener("click", () => {
    if (popUpStep4)
        closePopUp(popUpStep4);
});
//# sourceMappingURL=pop-up-handler.js.map