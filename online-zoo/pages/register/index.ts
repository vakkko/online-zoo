const loginInput = document.getElementById("login");
const loginErrMsg = document.querySelector<HTMLElement>(".err-msg.login");
const passwordInput = document.getElementById("password") as HTMLInputElement;
const passwordErrMsg = document.querySelector<HTMLElement>(".err-msg.password");
const confirmPasswordInput = document.getElementById("confirmpassword");
const confirmPasswordErrMsg = document.querySelector<HTMLElement>(
  ".err-msg.confirmpassword",
);
const nameInput = document.getElementById("name");
const nameInputErrMsg = document.querySelector<HTMLElement>(".err-msg.name");

const registrationForm = document.querySelector("form");
const submitBtn = document.querySelector('button[type="submit"]');

const loginRegex: RegExp = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx: RegExp = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;
const nameRegex: RegExp = /^[a-zA-Z]{3,}$/;

function validateInput(
  event: FocusEvent,
  inputElement: HTMLElement,
  inputError: HTMLElement | null,
  regex: RegExp,
) {
  const input = event.target as HTMLInputElement;
  const inputValue = input.value;
  if (!regex.test(inputValue)) {
    inputError?.classList.remove("hidden");
    inputElement.classList.add("err-border");
  } else {
    hideError(inputElement, inputError);
  }
}

function hideError(
  inputElement: HTMLElement | null,
  inputError: HTMLElement | null,
) {
  inputElement?.classList.remove("err-border");
  inputError?.classList.add("hidden");
}

function confirmPasswordValidation(event: FocusEvent) {
  const passwordValue = passwordInput.value;
  const { value } = event.target as HTMLInputElement;
  if (passwordValue !== value) {
    confirmPasswordErrMsg?.classList.remove("hidden");
    confirmPasswordInput?.classList.add("err-border");
  } else {
    if (confirmPasswordErrMsg) {
      hideError(confirmPasswordErrMsg, confirmPasswordInput);
    }
  }
}

loginInput?.addEventListener("blur", (e) => {
  validateInput(e, loginInput, loginErrMsg, loginRegex);
});
loginInput?.addEventListener("click", () => {
  hideError(loginInput, loginErrMsg);
});

passwordInput?.addEventListener("blur", (e) => {
  validateInput(e, passwordInput, passwordErrMsg, passwordRegexx);
});

passwordInput?.addEventListener("click", () => {
  hideError(passwordInput, passwordErrMsg);
});

confirmPasswordInput?.addEventListener("blur", (e) => {
  confirmPasswordValidation(e);
});

confirmPasswordInput?.addEventListener("click", () => {
  hideError(confirmPasswordInput, confirmPasswordErrMsg);
});

nameInput?.addEventListener("blur", (e) => {
  validateInput(e, nameInput, nameInputErrMsg, nameRegex);
});

nameInput?.addEventListener("click", () => {
  hideError(nameInput, nameInputErrMsg);
});
