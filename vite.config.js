import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
	plugins: [nunjucks(), createHtmlPlugin({ minify: true })],
});
