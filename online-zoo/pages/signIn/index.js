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
import { validateField } from "../../ts/registerLogin/registerLogin.js";
const signInForm = document.querySelector("form");
const submitButton = document.querySelector("form button");
const responseMsg = document.querySelector(".response-msg");
const loginInput = document.getElementById("login");
const loginErrMsg = document.querySelector(".err-msg.login");
const passwordInput = document.getElementById("password");
const passwordErrMsg = document.querySelector(".err-msg.password");
const loginRegex = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;
function checkFormValidity() {
    const isLoginValid = loginRegex.test(loginInput.value);
    const isPasswordValid = passwordRegexx.test(passwordInput.value);
    return isLoginValid && isPasswordValid;
}
function updateButtonState() {
    if (checkFormValidity()) {
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute("disabled");
    }
    else {
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.setAttribute("disabled", "true");
    }
}
[loginInput, passwordInput].forEach((input) => {
    input === null || input === void 0 ? void 0 : input.addEventListener("input", updateButtonState);
});
signInForm === null || signInForm === void 0 ? void 0 : signInForm.addEventListener("submit", (e) => {
    const isLoginValid = validateField(loginInput, loginErrMsg, loginRegex);
    const isPasswordValid = validateField(passwordInput, passwordErrMsg, passwordRegexx);
    const requestBody = {
        login: loginInput.value,
        password: passwordInput.value,
    };
    if (!isLoginValid || !isPasswordValid) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute("disabled");
        function registerRequest() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${BASE_URL}/auth/login`, {
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
                    const { data } = yield response.json();
                    const name = data.user.name;
                    const email = data.user.email;
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("email", email);
                    window.location.href = "../landing/index.html";
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