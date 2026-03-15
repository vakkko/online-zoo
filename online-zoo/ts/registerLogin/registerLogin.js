const loginInput = document.getElementById("login");
const loginErrMsg = document.querySelector(".err-msg.login");
const passwordInput = document.getElementById("password");
const passwordErrMsg = document.querySelector(".err-msg.password");
const loginRegex = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;
export function showError(inputElement, errorMsg) {
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.add("err-border");
    errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.classList.remove("hidden");
}
export function hideError(inputElement, errorMsg) {
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.classList.remove("err-border");
    errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.classList.add("hidden");
}
export function validateField(input, errorMsg, regex) {
    if (!regex.test(input.value)) {
        showError(input, errorMsg);
        return false;
    }
    hideError(input, errorMsg);
    return true;
}
loginInput === null || loginInput === void 0 ? void 0 : loginInput.addEventListener("blur", () => validateField(loginInput, loginErrMsg, loginRegex));
loginInput === null || loginInput === void 0 ? void 0 : loginInput.addEventListener("focus", () => hideError(loginInput, loginErrMsg));
passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("blur", () => {
    validateField(passwordInput, passwordErrMsg, passwordRegexx);
});
passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("focus", () => hideError(passwordInput, passwordErrMsg));
//# sourceMappingURL=registerLogin.js.map