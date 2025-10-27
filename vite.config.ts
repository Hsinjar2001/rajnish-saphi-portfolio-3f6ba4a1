import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base when deploying to GitHub Pages under a project page
  // e.g. https://<username>.github.io/rajnish-saphi-portfolio-3f6ba4a1/
  base: "/rajnish-saphi-portfolio-3f6ba4a1/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
