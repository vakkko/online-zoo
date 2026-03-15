const path: string = window.location.pathname;
const navLinks: NodeListOf<Element> =
  document.querySelectorAll(".page-navigation a");
const humburgerBtn: HTMLElement | null = document.querySelector(
  ".btn-humburger-menu",
);
const navigationCont: Element | null =
  document.querySelector(".page-navigation");
const closeBtn: Element | null = document.querySelector(".btn-cancel-header");
const userAvatar = document.querySelector<HTMLElement>(
  ".user-box > .user-avatar",
);
const authorizationPopup = document.querySelector<HTMLElement>(
  ".pop-up-authorization",
);
const authOverlay = document.getElementById("auth-overlay");
const cancelAuthButton =
  document.querySelector<HTMLElement>(".btn-cancel-auth");
const userName = document.querySelectorAll<HTMLElement>(".user-name");
let isLogedIn: boolean = Boolean(
  sessionStorage.getItem("name") && sessionStorage.getItem("email"),
);
const userEmail = document.querySelector<HTMLElement>(".user-email");
const signOutPopUp = document.querySelector<HTMLElement>(".pop-up-sign-out");
const signOutButton = document.querySelector<HTMLElement>(".btn-sign-out");
const cancelSignOut = document.querySelector<HTMLElement>(
  ".btn-cancel-sign-out",
);
const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const formated = href?.replaceAll("../", "");

  if (formated && path.endsWith(formated)) {
    link.classList.add("active");
  }
});

function showNavigation(): void {
  if (humburgerBtn) {
    navigationCont?.classList.add("open");
    humburgerBtn.style.display = "none";
  }
}

function closeNavigation(): void {
  if (humburgerBtn) {
    navigationCont?.classList.remove("open");
    humburgerBtn.style.display = "block";
  }
}

export function slideLeft(element: HTMLElement | null): void {
  if (element) {
    element.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  }
}

export function slideRight(element: HTMLElement | null): void {
  if (element) {
    element.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  }
}

function showPopUp(popUp: HTMLElement | null): void {
  if (popUp) {
    popUp?.classList.remove("hidden");
    authOverlay?.classList.remove("hidden");
  }
}

function hidePopUp(popUp: HTMLElement | null): void {
  if (popUp) {
    popUp?.classList.add("hidden");
    authOverlay?.classList.add("hidden");
  }
}

if (name && userEmail) {
  userName.forEach((user) => {
    user.classList.remove("hidden");
    user.textContent = name;
  });

  userEmail.textContent = email;
}

humburgerBtn?.addEventListener("click", showNavigation);
closeBtn?.addEventListener("click", closeNavigation);

userAvatar?.addEventListener("click", () => {
  if (isLogedIn) {
    showPopUp(signOutPopUp);
  } else {
    showPopUp(authorizationPopup);
  }
});

cancelSignOut?.addEventListener("click", () => hidePopUp(signOutPopUp));
cancelAuthButton?.addEventListener("click", () =>
  hidePopUp(authorizationPopup),
);
signOutButton?.addEventListener("click", () => {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location.reload();
  hidePopUp(signOutPopUp);
});
