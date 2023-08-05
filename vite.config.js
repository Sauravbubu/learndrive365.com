import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import imageminPlugin from "vite-plugin-imagemin";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      mozjpeg: {
        quality: 10, // Set the quality (0-100) for JPEG images
      },
    }),
  ],
  mode: "production", // Enable production mode
  build: {
    // Enable minification and tree shaking by default
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate large third-party libraries into vendor chunk
          // 'vendor.js': ['library1', 'library2'],
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
