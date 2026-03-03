export function createElement(htmlElement: string, className: string) {
  const element = document.createElement(htmlElement);
  element.setAttribute("class", className);
  return element;
}
