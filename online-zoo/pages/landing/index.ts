import { fetchData } from "../../utils/fetch/fetch.js";

import { addContentAfter } from "../../utils/addContentAfter/addContentAfter.js";

import { createElement } from "../../utils/createElement/createElement.js";

import type { addCarouselItemTypes, Animal } from "./index.interface.js";

let carouselContainer: HTMLElement | null = null;
const leftSlider = document.querySelector<HTMLElement>(".left-arrow");
const rightSlider = document.querySelector<HTMLElement>(".right-arrow");
const articleArrows = document.querySelector<HTMLElement>(".article-arrows");

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

function showLoader() {
  if (articleArrows) {
    addContentAfter("p", "Loading...", "loader", articleArrows);
  }
}

function showError() {
  if (articleArrows) {
    addContentAfter(
      "p",
      "Something went wrong, please refresh the page",
      "error-message",
      articleArrows,
    );
  }
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader?.remove();
}

function addCarouselItem({
  name,
  imgSource,
  commonName,
  description,
}: addCarouselItemTypes): string {
  const htmlContent = `
  <div class='carousel-item'>
      <span>${name}</span>
            <div class="carousel-image-box">
              <img
                src=${imgSource}
                alt="${commonName}"
              />
            </div>
            <div>
              <h4>${commonName}</h4>
              <p>
             ${description}
              </p>
              <button>
                view live cam
                <svg
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
  </div>
  `;

  return htmlContent;
}

async function AnimalData() {
  try {
    showLoader();

    const { data }: { data: Animal[] } = await fetchData(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets",
    );

    if (data.length > 0 && articleArrows) {
      carouselContainer = createElement("div", "carousel-container");

      data.forEach((animal) => {
        const animalItem = addCarouselItem({
          ...animal,
          imgSource: "../../assets/images/carousel-images/panda.png",
        });
        carouselContainer!.insertAdjacentHTML("beforeend", animalItem);
      });
      articleArrows?.after(carouselContainer);
    }
  } catch (error) {
    showError();
  } finally {
    hideLoader();
  }
}

AnimalData();

leftSlider?.addEventListener("click", slideLeft);
rightSlider?.addEventListener("click", slideRight);
