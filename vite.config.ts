import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [vue2()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    target: "es2022",
  },
  base: "./",
});
