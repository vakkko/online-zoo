export function addContententAt(htmlElement, content, className, showAfter, renderAt) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    const textContent = document.createTextNode(content);
    element.appendChild(textContent);
    if (renderAt === "after") {
        showAfter === null || showAfter === void 0 ? void 0 : showAfter.after(element);
    }
    else if (renderAt === "before") {
        showAfter.before(element);
    }
    else if (renderAt === "append") {
        showAfter.append(element);
    }
}
//# sourceMappingURL=addContentAt.js.map