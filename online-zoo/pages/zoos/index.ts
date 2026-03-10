import { fetchAnimals, getAnimalById } from "./zoos.dom.js";

const animalNavigationCarousel = document.querySelector<HTMLElement>(
  ".animal-navigation-carousel",
);
const downArrow = document.querySelector<HTMLElement>(".down-arrow");
const navigation = document.querySelector<HTMLElement>(".animal-navigation");
const openCloseBtn = document.querySelector<HTMLElement>(".btn-open-close");

function addOpenClass(): void {
  navigation?.classList.toggle("open");
  openCloseBtn?.classList.toggle("open");
}

openCloseBtn?.addEventListener("click", addOpenClass);

fetchAnimals();

animalNavigationCarousel?.addEventListener("click", (e) => {
  const target = (e.target as HTMLElement).closest(".animal-nav-link");
  if (!target) return;
  e.preventDefault();
  let activeAnimalNavLink = document.querySelector<HTMLElement>(
    ".animal-nav-link.active",
  );
  let errorMessage = document.querySelector(".error-message");
  errorMessage?.classList.add("hidden");

  activeAnimalNavLink?.classList.remove("active");
  target.classList.add("active");

  const id = Number(target.getAttribute("data-id"));

  getAnimalById(id);
});

function scrollDown() {
  animalNavigationCarousel?.scrollBy({
    top: 170,
    behavior: "smooth",
  });
}

downArrow?.addEventListener("click", scrollDown);
