import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path-browserify";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@pages/*": path.resolve(__dirname, "src/pages/*"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@layouts/*": path.resolve(__dirname, "src/layouts/*"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@assets/*": path.resolve(__dirname, "src/assets/*"),
      path: "path-browserify",
    },
  },
});
