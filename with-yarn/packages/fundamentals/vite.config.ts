import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: false,
    outDir: "dist",
    lib: {
      entry: {
        index: "./src/index.ts",
        colors: "./src/colors.ts",
        icons: "./src/icons.ts",
      },
      // Name of the library.
      name: "@karmats/fundamentals",
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      formats: ["es", "cjs"],
    },
  },
});
