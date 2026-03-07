import { BASE_URL } from "../../consts/consts.js";
import { validateField } from "../../ts/registerLogin/registerLogin.js";

const signInForm = document.querySelector("form") as HTMLFormElement;
const submitButton = document.querySelector("form button");
const responseMsg = document.querySelector<HTMLElement>(".response-msg");
const loginInput = document.getElementById("login") as HTMLInputElement;
const loginErrMsg = document.querySelector<HTMLElement>(".err-msg.login");
const passwordInput = document.getElementById("password") as HTMLInputElement;
const passwordErrMsg = document.querySelector<HTMLElement>(".err-msg.password");
const loginRegex: RegExp = /^[a-zA-Z][a-zA-Z]{2,}$/;
const passwordRegexx: RegExp = /^(?=.*[^a-zA-Z0-9])[a-zA-Z].{5,}$/;

function checkFormValidity(): boolean {
  const isLoginValid = loginRegex.test(loginInput.value);
  const isPasswordValid = passwordRegexx.test(passwordInput.value);

  return isLoginValid && isPasswordValid;
}

function updateButtonState() {
  if (checkFormValidity()) {
    submitButton?.removeAttribute("disabled");
  } else {
    submitButton?.setAttribute("disabled", "true");
  }
}

[loginInput, passwordInput].forEach((input) => {
  input?.addEventListener("input", updateButtonState);
});

signInForm?.addEventListener("submit", (e) => {
  const isLoginValid = validateField(loginInput, loginErrMsg, loginRegex);
  const isPasswordValid = validateField(
    passwordInput,
    passwordErrMsg,
    passwordRegexx,
  );
  const requestBody = {
    login: loginInput.value,
    password: passwordInput.value,
  };

  if (!isLoginValid || !isPasswordValid) {
    e.preventDefault();
  } else {
    e.preventDefault();

    submitButton?.removeAttribute("disabled");
    async function registerRequest() {
      try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
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
        window.location.href =
          "http://127.0.0.1:5500/online-zoo/pages/landing/index.html";
      } catch (err) {
        console.error(err);
      }
    }
    registerRequest();
  }
});
