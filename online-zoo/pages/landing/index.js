const carouselContainer = document.querySelector(".carousel-container");
const leftSlider = document.querySelector(".left-arrow");
const rightSlider = document.querySelector(".right-arrow");

function slideLeft() {
  carouselContainer.scrollBy({
    left: -220,
    behaviour: "smooth",
  });
}

function slideRight() {
  carouselContainer.scrollBy({
    left: 220,
    behaviour: "smooth",
  });
}

leftSlider.addEventListener("click", slideLeft);
rightSlider.addEventListener("click", slideRight);
