const navigation = document.querySelector(".animal-navigation");
const openCloseBtn = document.querySelector(".btn-open-close");

function addOpenClass() {
  navigation.classList.toggle("open");
  openCloseBtn.classList.toggle("open");
}

openCloseBtn.addEventListener("click", addOpenClass);
