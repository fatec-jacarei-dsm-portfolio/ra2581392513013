import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// O GitHub Pages publica a pasta docs/ da branch main em
// https://fatec-jacarei-dsm-portfolio.github.io/ra2581392513013/
export default defineConfig({
  base: "/ra2581392513013/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
