import { fetchAnimals, getAnimalById } from "./zoos.dom.js";
const animalNavigationCarousel = document.querySelector(".animal-navigation-carousel");
const downArrow = document.querySelector(".down-arrow");
const navigation = document.querySelector(".animal-navigation");
const openCloseBtn = document.querySelector(".btn-open-close");
function addOpenClass() {
    navigation === null || navigation === void 0 ? void 0 : navigation.classList.toggle("open");
    openCloseBtn === null || openCloseBtn === void 0 ? void 0 : openCloseBtn.classList.toggle("open");
}
openCloseBtn === null || openCloseBtn === void 0 ? void 0 : openCloseBtn.addEventListener("click", addOpenClass);
fetchAnimals();
animalNavigationCarousel === null || animalNavigationCarousel === void 0 ? void 0 : animalNavigationCarousel.addEventListener("click", (e) => {
    const target = e.target.closest(".animal-nav-link");
    if (!target)
        return;
    e.preventDefault();
    let activeAnimalNavLink = document.querySelector(".animal-nav-link.active");
    let errorMessage = document.querySelector(".error-message");
    errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.classList.add("hidden");
    activeAnimalNavLink === null || activeAnimalNavLink === void 0 ? void 0 : activeAnimalNavLink.classList.remove("active");
    target.classList.add("active");
    const id = Number(target.getAttribute("data-id"));
    getAnimalById(id);
});
function scrollDown() {
    animalNavigationCarousel === null || animalNavigationCarousel === void 0 ? void 0 : animalNavigationCarousel.scrollBy({
        top: 170,
        behavior: "smooth",
    });
}
downArrow === null || downArrow === void 0 ? void 0 : downArrow.addEventListener("click", scrollDown);
//# sourceMappingURL=index.js.map