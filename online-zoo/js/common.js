const path = window.location.pathname;
const navLinks = document.querySelectorAll(".page-navigation a");
const hamburgerBtn = document.querySelector(".btn-humburger-menu");
const navigationCont = document.querySelector(".page-navigation");
const closeBtn = document.querySelector(".btn-cancel-header");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const formated = href.replaceAll("../", "");

  if (path.endsWith(formated)) {
    link.classList.add("active");
  }
});

function showNavigation() {
  navigationCont.classList.add("open");
  hamburgerBtn.style.display = "none";
}

function closeNavigation() {
  navigationCont.classList.remove("open");
  hamburgerBtn.style.display = "block";
}

hamburgerBtn.addEventListener("click", showNavigation);
closeBtn.addEventListener("click", closeNavigation);
