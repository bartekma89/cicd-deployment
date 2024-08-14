import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import packageJson from "./package.json";

const env = loadEnv("test", process.cwd(), "XYZ");

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  build: {
    // outDir: "dist", // default value
    // assetsDir: "assets", // default value,
    // minify: true, // default true, 'terser' or 'esbuild',
    sourcemap: true,
  },
  define: {
    APP_VERSION: JSON.stringify(packageJson.version),
    APP_TEST: JSON.stringify(env.XYZ_TEST),
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
    }),
  ],
});
