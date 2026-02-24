const path = window.location.pathname;
const navLinks = document.querySelectorAll(".page-navigation a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const formated = href.replace("..", "");
  if (path.endsWith(formated)) {
    link.classList.add("active");
  }
});
