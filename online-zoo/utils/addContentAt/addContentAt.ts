export function addContententAt(
  htmlElement: string,
  content: string,
  className: string,
  showAfter: HTMLElement,
  renderAt: "after" | "before" | "append",
) {
  const element = document.createElement(htmlElement);
  element.classList.add(className);
  const textContent = document.createTextNode(content);
  element.appendChild(textContent);
  if (renderAt === "after") {
    showAfter?.after(element);
  } else if (renderAt === "before") {
    showAfter.before(element);
  } else if (renderAt === "append") {
    showAfter.append(element);
  }
}
