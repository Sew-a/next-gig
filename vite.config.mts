import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      {
        find: /^@\/src\//,
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
      {
        find: /^@\//,
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
    ],
  },
  server: {
    proxy: {
      "/api": "http://localhost:4001",
    },
  },
  build: {
    chunkSizeWarningLimit: 900,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "three",
              test: /node_modules[\\/](three|@react-three)[\\/]/,
              priority: 20,
            },
            {
              name: "code-highlight",
              test: /node_modules[\\/](react-syntax-highlighter|refractor|prismjs|highlight\.js|lowlight)[\\/]/,
              priority: 20,
            },
          ],
        },
      },
    },
  },
});
