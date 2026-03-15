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
import { validateField, showError, hideError, } from "../../ts/registerLogin/registerLogin.js";
const registrationForm = document.querySelector("form");
const submitButton = document.querySelector("form button");
const responseMsg = document.querySelector(".response-msg");
const loginInput = document.getElementById("login");
const loginErrMsg = document.querySelector(".err-msg.login");
const passwordInput = document.getElementById("password");
const passwordErrMsg = document.querySelector(".err-msg.password");
const confirmPasswordInput = document.getElementById("confirmpassword");
const confirmPasswordErrMsg = document.querySelector(".err-msg.confirmpassword");
const nameInput = document.querySelector(".donation-pop-up-step-2#name");
const nameInputErrMsg = document.querySelector(".err-msg.name");
const emailInput = document.querySelector(".donation-pop-up-step-2#email");
const emailInputErrMsg = document.querySelector(".err-msg.email");
const loginRegex = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;
export const nameRegex = /^[a-zA-Z]{3,}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value ||
        confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, confirmPasswordErrMsg);
        return false;
    }
    hideError(confirmPasswordInput, confirmPasswordErrMsg);
    return true;
}
function checkFormValidity() {
    const isLoginValid = loginRegex.test(loginInput.value);
    const isPasswordValid = passwordRegexx.test(passwordInput.value);
    const isNameValid = nameRegex.test(nameInput.value);
    const isEmailValid = emailRegex.test(emailInput.value);
    const isConfirmValid = confirmPasswordInput.value === passwordInput.value &&
        confirmPasswordInput.value !== "";
    return (isLoginValid &&
        isPasswordValid &&
        isNameValid &&
        isEmailValid &&
        isConfirmValid);
}
function updateButtonState() {
    if (checkFormValidity()) {
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute("disabled");
    }
    else {
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.setAttribute("disabled", "true");
    }
}
[
    loginInput,
    passwordInput,
    confirmPasswordInput,
    nameInput,
    emailInput,
].forEach((input) => {
    input === null || input === void 0 ? void 0 : input.addEventListener("input", updateButtonState);
});
emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("blur", () => {
    validateField(emailInput, emailInputErrMsg, emailRegex);
});
emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("focus", () => hideError(emailInput, emailInputErrMsg));
passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("blur", () => {
    if (confirmPasswordInput.value)
        validateConfirmPassword();
});
confirmPasswordInput === null || confirmPasswordInput === void 0 ? void 0 : confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
confirmPasswordInput === null || confirmPasswordInput === void 0 ? void 0 : confirmPasswordInput.addEventListener("focus", () => hideError(confirmPasswordInput, confirmPasswordErrMsg));
nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener("blur", () => validateField(nameInput, nameInputErrMsg, nameRegex));
nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener("focus", () => hideError(nameInput, nameInputErrMsg));
registrationForm === null || registrationForm === void 0 ? void 0 : registrationForm.addEventListener("submit", (e) => {
    const isLoginValid = validateField(loginInput, loginErrMsg, loginRegex);
    const isPasswordValid = validateField(passwordInput, passwordErrMsg, passwordRegexx);
    const isNameValid = validateField(nameInput, nameInputErrMsg, nameRegex);
    const isConfirmValid = validateConfirmPassword();
    const isEmailValid = validateField(emailInput, emailInputErrMsg, emailRegex);
    const requestBody = {
        login: loginInput.value,
        password: passwordInput.value,
        name: nameInput.value,
        email: emailInput.value,
    };
    if (!isLoginValid ||
        !isPasswordValid ||
        !isNameValid ||
        !isConfirmValid ||
        !isEmailValid) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute("disabled");
        function registerRequest() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${BASE_URL}/auth/register`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(requestBody),
                    });
                    if (!response.ok) {
                        const errorData = yield response.json();
                        responseMsg === null || responseMsg === void 0 ? void 0 : responseMsg.classList.remove("hidden");
                        if (errorData.error && responseMsg) {
                            responseMsg.textContent = errorData.error;
                            return;
                        }
                    }
                    responseMsg === null || responseMsg === void 0 ? void 0 : responseMsg.classList.add("hidden");
                    registrationForm.reset();
                }
                catch (err) {
                    console.error(err);
                }
            });
        }
        registerRequest();
    }
});
//# sourceMappingURL=index.js.map