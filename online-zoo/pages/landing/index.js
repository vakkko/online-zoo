const carouselContainer = document.querySelector(".carousel-container");
const leftSlider = document.querySelector(".left-arrow");
const rightSlider = document.querySelector(".right-arrow");
const path = window.location.pathname;
const navLinks = document.querySelectorAll(".page-navigation a");

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

navLinks.forEach((link) => {
  if (path.endsWith(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

leftSlider.addEventListener("click", slideLeft);
rightSlider.addEventListener("click", slideRight);
