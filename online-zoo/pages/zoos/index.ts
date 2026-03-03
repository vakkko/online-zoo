const navigation = document.querySelector<HTMLElement>(".animal-navigation");
const openCloseBtn = document.querySelector<HTMLElement>(".btn-open-close");

function addOpenClass(): void {
  navigation?.classList.toggle("open");
  openCloseBtn?.classList.toggle("open");
}

openCloseBtn?.addEventListener("click", addOpenClass);
