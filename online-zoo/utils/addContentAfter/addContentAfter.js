export function addContentAfter(htmlElement, content, className, showAfter) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    const textContent = document.createTextNode(content);
    element.appendChild(textContent);
    showAfter === null || showAfter === void 0 ? void 0 : showAfter.after(element);
}
//# sourceMappingURL=addContentAfter.js.map