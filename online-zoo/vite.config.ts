import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        zoos: resolve(__dirname, "pages/zoos/index.html"),
        landing: resolve(__dirname, "pages/landing/index.html"),
        map: resolve(__dirname, "pages/map/index.html"),
        contactUs: resolve(__dirname, "pages/contact-us/index.html"),
        register: resolve(__dirname, "pages/register/index.html"),
        signIn: resolve(__dirname, "pages/signIn/index.html"),
      },
    },
  },
});
