import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },
  server: {
    host: true,
    port: 5173,
  },
});
