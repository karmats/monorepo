import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "MaterialComponents",
      fileName: "material-components",
      formats: ["es"],
    },
    emptyOutDir: true,
    sourcemap: false,
    outDir: "dist",

    rollupOptions: {
      output: {
        entryFileNames: "bundle.js",
      },
    },
  },
});
