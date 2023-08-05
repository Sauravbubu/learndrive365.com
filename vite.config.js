import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  mode: "production", // Enable production mode
  build: {
    // Enable minification and tree shaking by default
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate large third-party libraries into vendor chunk
          react: ["react", "react-dom", "react-router-dom", "react-icons"],
          "styled-components": ["styled-components"],
        },
      },
    },
    preload: true, // Enable asset preloading
  },
  server: {
    compress: true, // Enable asset compression (gzip)
  },
});
