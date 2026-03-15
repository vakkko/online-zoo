const loginInput = document.getElementById("login") as HTMLInputElement;
const loginErrMsg = document.querySelector<HTMLElement>(".err-msg.login");
const passwordInput = document.getElementById("password") as HTMLInputElement;
const passwordErrMsg = document.querySelector<HTMLElement>(".err-msg.password");

const loginRegex: RegExp = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx: RegExp = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;

export function showError(
  inputElement: HTMLElement | null,
  errorMsg: HTMLElement | null,
) {
  inputElement?.classList.add("err-border");
  errorMsg?.classList.remove("hidden");
}

export function hideError(
  inputElement: HTMLElement | null,
  errorMsg: HTMLElement | null,
) {
  inputElement?.classList.remove("err-border");
  errorMsg?.classList.add("hidden");
}

export function validateField(
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

loginInput?.addEventListener("blur", () =>
  validateField(loginInput, loginErrMsg, loginRegex),
);
loginInput?.addEventListener("focus", () => hideError(loginInput, loginErrMsg));

passwordInput?.addEventListener("blur", () => {
  validateField(passwordInput, passwordErrMsg, passwordRegexx);
});
passwordInput?.addEventListener("focus", () =>
  hideError(passwordInput, passwordErrMsg),
);
