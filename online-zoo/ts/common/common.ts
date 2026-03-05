const path: string = window.location.pathname;
const navLinks: NodeListOf<Element> =
  document.querySelectorAll(".page-navigation a");
const humburgerBtn: HTMLElement | null = document.querySelector(
  ".btn-humburger-menu",
);
const navigationCont: Element | null =
  document.querySelector(".page-navigation");
const closeBtn: Element | null = document.querySelector(".btn-cancel-header");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const formated = href?.replaceAll("../", "");

  if (formated && path.endsWith(formated)) {
    link.classList.add("active");
  }
});

function showNavigation(): void {
  if (humburgerBtn) {
    navigationCont?.classList.add("open");
    humburgerBtn.style.display = "none";
  }
}

function closeNavigation(): void {
  if (humburgerBtn) {
    navigationCont?.classList.remove("open");
    humburgerBtn.style.display = "block";
  }
}

export function slideLeft(element: HTMLElement | null): void {
  if (element) {
    element.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  }
}

export function slideRight(element: HTMLElement | null): void {
  if (element) {
    element.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  }
}

humburgerBtn?.addEventListener("click", showNavigation);
closeBtn?.addEventListener("click", closeNavigation);
