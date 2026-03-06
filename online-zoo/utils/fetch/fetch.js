var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addContententAt } from "../addContentAt/addContentAt.js";
export const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    if (!response.ok) {
        throw new Error("Invalid fetching data2");
    }
    return response.json();
});
export function showLoader(element, renderAt) {
    if (element) {
        addContententAt("p", "Loading...", "loader", element, renderAt);
    }
}
export function showError(element, renderAt) {
    if (element) {
        addContententAt("p", "Something went wrong, please refresh the page", "error-message", element, renderAt);
    }
}
export function hideLoader() {
    const loader = document.querySelector(".loader");
    loader === null || loader === void 0 ? void 0 : loader.remove();
}
//# sourceMappingURL=fetch.js.map