import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
	plugins: [nunjucks()],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "index.css") return "assets/index.css";
					return `assets/${assetInfo.name}`;
				},
			},
		},
	},
});
