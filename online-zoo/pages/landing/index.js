const carouselContainer = document.querySelector(".carousel-container");
const leftSlider = document.querySelector(".left-arrow");
const rightSlider = document.querySelector(".right-arrow");
function slideLeft() {
    if (carouselContainer instanceof HTMLElement) {
        carouselContainer.scrollBy({
            left: -220,
            behavior: "smooth",
        });
    }
}
function slideRight() {
    if (carouselContainer instanceof HTMLElement) {
        carouselContainer.scrollBy({
            left: 220,
            behavior: "smooth",
        });
    }
}
leftSlider === null || leftSlider === void 0 ? void 0 : leftSlider.addEventListener("click", slideLeft);
rightSlider === null || rightSlider === void 0 ? void 0 : rightSlider.addEventListener("click", slideRight);
export {};
//# sourceMappingURL=index.js.map