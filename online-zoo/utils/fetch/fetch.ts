import { addContentAfter } from "../addContentAfter/addContentAfter.js";

export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid fetching data2");
  }
  return response.json();
};

export function showLoader(element: HTMLElement | null) {
  if (element) {
    addContentAfter("p", "Loading...", "loader", element);
  }
}

export function showError(element: HTMLElement | null) {
  if (element) {
    addContentAfter(
      "p",
      "Something went wrong, please refresh the page",
      "error-message",
      element,
    );
  }
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  loader?.remove();
}
