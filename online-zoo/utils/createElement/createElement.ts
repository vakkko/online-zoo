export function createElement(htmlElement: string, className?: string) {
  const element = document.createElement(htmlElement);
  if (className) {
    element.setAttribute("class", className);
  }
  return element;
}
