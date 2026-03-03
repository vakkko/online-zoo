export function addContentAfter(
  htmlElement: string,
  content: string,
  className: string,
  showAfter: HTMLElement,
) {
  const element = document.createElement(htmlElement);
  element.classList.add(className);
  const textContent = document.createTextNode(content);
  element.appendChild(textContent);
  showAfter?.after(element);
}
