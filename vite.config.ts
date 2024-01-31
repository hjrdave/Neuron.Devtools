import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    outDir: "./dist/",
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: "./package/index.ts",
      name: "NeuronDevtools",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@sandstack/neuron",
        "react-json-view",
        "tailwindcss",
      ],
      output: [
        {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss",
          },
        },
        {
          dir: "./dist",
          name: "index",
          entryFileNames: "index.js",
        },
        {
          dir: "./dist",
          name: "index",
          format: "cjs",
          entryFileNames: "index.cjs",
        },
        {
          dir: "./dist/umd/",
          name: "index",
          format: "umd",
          entryFileNames: "index.js",
        },
        {
          dir: "./dist/esm/",
          name: "index",
          format: "esm",
          entryFileNames: "index.js",
        },
        {
          dir: "./dist/iife/",
          name: "index",
          format: "iife",
          entryFileNames: "index.js",
        },
        {
          dir: "./dist/system/",
          name: "index",
          format: "system",
          entryFileNames: "index.js",
        },
      ],
    },
  },
  plugins: [react(), dts()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
