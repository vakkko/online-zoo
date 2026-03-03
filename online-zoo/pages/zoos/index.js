const navigation = document.querySelector(".animal-navigation");
const openCloseBtn = document.querySelector(".btn-open-close");
function addOpenClass() {
    navigation === null || navigation === void 0 ? void 0 : navigation.classList.toggle("open");
    openCloseBtn === null || openCloseBtn === void 0 ? void 0 : openCloseBtn.classList.toggle("open");
}
openCloseBtn === null || openCloseBtn === void 0 ? void 0 : openCloseBtn.addEventListener("click", addOpenClass);
export {};
//# sourceMappingURL=index.js.map