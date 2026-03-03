const carouselContainer: Element | null = document.querySelector(
  ".carousel-container",
);
const leftSlider: Element | null = document.querySelector(".left-arrow");
const rightSlider: Element | null = document.querySelector(".right-arrow");

function slideLeft(): void {
  if (carouselContainer instanceof HTMLElement) {
    carouselContainer.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  }
}

function slideRight(): void {
  if (carouselContainer instanceof HTMLElement) {
    carouselContainer.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  }
}

leftSlider?.addEventListener("click", slideLeft);
rightSlider?.addEventListener("click", slideRight);
