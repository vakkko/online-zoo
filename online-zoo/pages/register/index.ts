import { BASE_URL } from "../../consts/consts.js";

const registrationForm = document.querySelector("form") as HTMLFormElement;
const submitButton = document.querySelector("form button");
const responseMsg = document.querySelector<HTMLElement>(".response-msg");
const loginInput = document.getElementById("login") as HTMLInputElement;
const loginErrMsg = document.querySelector<HTMLElement>(".err-msg.login");
const passwordInput = document.getElementById("password") as HTMLInputElement;
const passwordErrMsg = document.querySelector<HTMLElement>(".err-msg.password");
const confirmPasswordInput = document.getElementById(
  "confirmpassword",
) as HTMLInputElement;
const confirmPasswordErrMsg = document.querySelector<HTMLElement>(
  ".err-msg.confirmpassword",
);
const nameInput = document.getElementById("name") as HTMLInputElement;
const nameInputErrMsg = document.querySelector<HTMLElement>(".err-msg.name");
const emailInput = document.getElementById("email") as HTMLInputElement;
const emailInputErrMsg = document.querySelector<HTMLElement>(".err-msg.email");

const loginRegex: RegExp = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx: RegExp = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;
const nameRegex: RegExp = /^[a-zA-Z]{3,}$/;
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function showError(
  inputElement: HTMLElement | null,
  errorMsg: HTMLElement | null,
) {
  inputElement?.classList.add("err-border");
  errorMsg?.classList.remove("hidden");
}

function hideError(
  inputElement: HTMLElement | null,
  errorMsg: HTMLElement | null,
) {
  inputElement?.classList.remove("err-border");
  errorMsg?.classList.add("hidden");
}

function validateField(
  input: HTMLInputElement,
  errorMsg: HTMLElement | null,
  regex: RegExp,
): boolean {
  if (!regex.test(input.value)) {
    showError(input, errorMsg);
    return false;
  }
  hideError(input, errorMsg);
  return true;
}

function validateConfirmPassword(): boolean {
  if (
    confirmPasswordInput.value !== passwordInput.value ||
    confirmPasswordInput.value === ""
  ) {
    showError(confirmPasswordInput, confirmPasswordErrMsg);
    return false;
  }
  hideError(confirmPasswordInput, confirmPasswordErrMsg);
  return true;
}

function checkFormValidity(): boolean {
  const isLoginValid = loginRegex.test(loginInput.value);
  const isPasswordValid = passwordRegexx.test(passwordInput.value);
  const isNameValid = nameRegex.test(nameInput.value);
  const isEmailValid = emailRegex.test(emailInput.value);
  const isConfirmValid =
    confirmPasswordInput.value === passwordInput.value &&
    confirmPasswordInput.value !== "";

  return (
    isLoginValid &&
    isPasswordValid &&
    isNameValid &&
    isEmailValid &&
    isConfirmValid
  );
}

function updateButtonState() {
  if (checkFormValidity()) {
    submitButton?.removeAttribute("disabled");
  } else {
    submitButton?.setAttribute("disabled", "true");
  }
}

[
  loginInput,
  passwordInput,
  confirmPasswordInput,
  nameInput,
  emailInput,
].forEach((input) => {
  input?.addEventListener("input", updateButtonState);
});

loginInput?.addEventListener("blur", () =>
  validateField(loginInput, loginErrMsg, loginRegex),
);
loginInput?.addEventListener("focus", () => hideError(loginInput, loginErrMsg));

emailInput?.addEventListener("blur", () => {
  validateField(emailInput, emailInputErrMsg, emailRegex);
});
emailInput?.addEventListener("focus", () =>
  hideError(emailInput, emailInputErrMsg),
);

passwordInput?.addEventListener("blur", () => {
  validateField(passwordInput, passwordErrMsg, passwordRegexx);
  if (confirmPasswordInput.value) validateConfirmPassword();
});
passwordInput?.addEventListener("focus", () =>
  hideError(passwordInput, passwordErrMsg),
);

confirmPasswordInput?.addEventListener("blur", validateConfirmPassword);
confirmPasswordInput?.addEventListener("focus", () =>
  hideError(confirmPasswordInput, confirmPasswordErrMsg),
);

nameInput?.addEventListener("blur", () =>
  validateField(nameInput, nameInputErrMsg, nameRegex),
);
nameInput?.addEventListener("focus", () =>
  hideError(nameInput, nameInputErrMsg),
);

registrationForm?.addEventListener("submit", (e) => {
  const isLoginValid = validateField(loginInput, loginErrMsg, loginRegex);
  const isPasswordValid = validateField(
    passwordInput,
    passwordErrMsg,
    passwordRegexx,
  );
  const isNameValid = validateField(nameInput, nameInputErrMsg, nameRegex);
  const isConfirmValid = validateConfirmPassword();
  const isEmailValid = validateField(emailInput, emailInputErrMsg, emailRegex);
  const requestBody = {
    login: loginInput.value,
    password: passwordInput.value,
    name: nameInput.value,
    email: emailInput.value,
  };

  if (
    !isLoginValid ||
    !isPasswordValid ||
    !isNameValid ||
    !isConfirmValid ||
    !isEmailValid
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();

    submitButton?.removeAttribute("disabled");
    async function registerRequest() {
      try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
          const errorData = await response.json();
          responseMsg?.classList.remove("hidden");
          if (errorData.error && responseMsg) {
            responseMsg.textContent = errorData.error;
            return;
          }
        }
        responseMsg?.classList.add("hidden");
        registrationForm.reset();
      } catch (err) {
        console.error(err);
      }
    }
    registerRequest();
  }
});
