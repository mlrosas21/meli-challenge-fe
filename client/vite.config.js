import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@mocks", replacement: "/src/mocks" },
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
  test:{
    environment: "jsdom"
  },
  plugins: [react()],
});
