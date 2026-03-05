export function createElement(htmlElement, className) {
    const element = document.createElement(htmlElement);
    if (className) {
        element.setAttribute("class", className);
    }
    return element;
}
//# sourceMappingURL=createElement.js.map