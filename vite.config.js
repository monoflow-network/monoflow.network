import { defineConfig } from "vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contacts: resolve(__dirname, "src/contacts.html"),
        values: resolve(__dirname, "src/values.html"),
      },
      output: {
        chunkFileStore: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    minify: "terser",
    cssMinify: true,
    sourcemap: false,
  },
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
});
