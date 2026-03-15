import { addContententAt } from "../addContentAt/addContentAt.js";

export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid fetching data2");
  }
  return response.json();
};

export function showLoader(
  element: HTMLElement | null,
  renderAt: "after" | "before" | "append",
) {
  if (element) {
    addContententAt("p", "Loading...", "loader", element, renderAt);
  }
}

export function showError(
  element: HTMLElement | null,
  renderAt: "after" | "before" | "append",
) {
  if (element) {
    addContententAt(
      "p",
      "Something went wrong, please refresh the page",
      "error-message",
      element,
      renderAt,
    );
  }
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  loader?.remove();
}
