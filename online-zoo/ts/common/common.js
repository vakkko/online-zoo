const path = window.location.pathname;
const navLinks = document.querySelectorAll(".page-navigation a");
const humburgerBtn = document.querySelector(".btn-humburger-menu");
const navigationCont = document.querySelector(".page-navigation");
const closeBtn = document.querySelector(".btn-cancel-header");
const userAvatar = document.querySelector(".user-box > .user-avatar");
const authorizationPopup = document.querySelector(".pop-up-authorization.hidden");
const authOverlay = document.getElementById("auth-overlay");
const cancelAuthButton = document.querySelector(".btn-cancel-auth");
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
function showAuthPopUp() {
    authorizationPopup === null || authorizationPopup === void 0 ? void 0 : authorizationPopup.classList.remove("hidden");
    authOverlay === null || authOverlay === void 0 ? void 0 : authOverlay.classList.remove("hidden");
}
function hideAuthPopup() {
    authorizationPopup === null || authorizationPopup === void 0 ? void 0 : authorizationPopup.classList.add("hidden");
    authOverlay === null || authOverlay === void 0 ? void 0 : authOverlay.classList.add("hidden");
}
humburgerBtn === null || humburgerBtn === void 0 ? void 0 : humburgerBtn.addEventListener("click", showNavigation);
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", closeNavigation);
userAvatar === null || userAvatar === void 0 ? void 0 : userAvatar.addEventListener("click", showAuthPopUp);
cancelAuthButton === null || cancelAuthButton === void 0 ? void 0 : cancelAuthButton.addEventListener("click", hideAuthPopup);
//# sourceMappingURL=common.js.map