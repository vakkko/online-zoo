const path = window.location.pathname;
const navLinks = document.querySelectorAll(".page-navigation a");
const humburgerBtn = document.querySelector(".btn-humburger-menu");
const navigationCont = document.querySelector(".page-navigation");
const closeBtn = document.querySelector(".btn-cancel-header");
const userAvatar = document.querySelector(".user-box > .user-avatar");
const authorizationPopup = document.querySelector(".pop-up-authorization");
const authOverlay = document.getElementById("auth-overlay");
const cancelAuthButton = document.querySelector(".btn-cancel-auth");
const userName = document.querySelectorAll(".user-name");
let isLogedIn = Boolean(sessionStorage.getItem("name") && sessionStorage.getItem("email"));
const userEmail = document.querySelector(".user-email");
const signOutPopUp = document.querySelector(".pop-up-sign-out");
const signOutButton = document.querySelector(".btn-sign-out");
const cancelSignOut = document.querySelector(".btn-cancel-sign-out");
const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const formated = href === null || href === void 0 ? void 0 : href.replaceAll("../", "");
    if (formated && path.endsWith(formated)) {
        link.classList.add("active");
    }
});
function showNavigation() {
    if (humburgerBtn) {
        navigationCont === null || navigationCont === void 0 ? void 0 : navigationCont.classList.add("open");
        humburgerBtn.style.display = "none";
    }
}
function closeNavigation() {
    if (humburgerBtn) {
        navigationCont === null || navigationCont === void 0 ? void 0 : navigationCont.classList.remove("open");
        humburgerBtn.style.display = "block";
    }
}
export function slideLeft(element) {
    if (element) {
        element.scrollBy({
            left: -220,
            behavior: "smooth",
        });
    }
}
export function slideRight(element) {
    if (element) {
        element.scrollBy({
            left: 220,
            behavior: "smooth",
        });
    }
}
function showPopUp(popUp) {
    if (popUp) {
        popUp === null || popUp === void 0 ? void 0 : popUp.classList.remove("hidden");
        authOverlay === null || authOverlay === void 0 ? void 0 : authOverlay.classList.remove("hidden");
    }
}
function hidePopUp(popUp) {
    if (popUp) {
        popUp === null || popUp === void 0 ? void 0 : popUp.classList.add("hidden");
        authOverlay === null || authOverlay === void 0 ? void 0 : authOverlay.classList.add("hidden");
    }
}
if (name && userEmail) {
    userName.forEach((user) => {
        user.classList.remove("hidden");
        user.textContent = name;
    });
    userEmail.textContent = email;
}
humburgerBtn === null || humburgerBtn === void 0 ? void 0 : humburgerBtn.addEventListener("click", showNavigation);
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", closeNavigation);
userAvatar === null || userAvatar === void 0 ? void 0 : userAvatar.addEventListener("click", () => {
    if (isLogedIn) {
        showPopUp(signOutPopUp);
    }
    else {
        showPopUp(authorizationPopup);
    }
});
cancelSignOut === null || cancelSignOut === void 0 ? void 0 : cancelSignOut.addEventListener("click", () => hidePopUp(signOutPopUp));
cancelAuthButton === null || cancelAuthButton === void 0 ? void 0 : cancelAuthButton.addEventListener("click", () => hidePopUp(authorizationPopup));
signOutButton === null || signOutButton === void 0 ? void 0 : signOutButton.addEventListener("click", () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    window.location.reload();
    hidePopUp(signOutPopUp);
});
//# sourceMappingURL=common.js.map