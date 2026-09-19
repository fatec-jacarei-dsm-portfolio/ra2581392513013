import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ra2581392513013/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});