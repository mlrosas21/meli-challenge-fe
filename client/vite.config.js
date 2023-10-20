import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@data", replacement: "/src/data" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@service", replacement: "/src/service" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
