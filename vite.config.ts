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
      "@hooks": path.resolve(__dirname, "src/utils/hooks"),
      "@hooks/*": path.resolve(__dirname, "src/utils/hooks/*"),
      "@store": path.resolve(__dirname, "src/store"),
      "@store/*": path.resolve(__dirname, "src/store/*"),
      "@config": path.resolve(__dirname, "src/config"),
      "@config/*": path.resolve(__dirname, "src/config/*"),
      "@services": path.resolve(__dirname, "src/services"),
      "@services/*": path.resolve(__dirname, "src/services/*"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@interfaces/*": path.resolve(__dirname, "src/interfaces/*"),
      path: "path-browserify",
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  optimizeDeps: {
    include: ["@emotion/styled", "@mui/styled-engine-sc", "@mui/styled-engine"],
  },
});
