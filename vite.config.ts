/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description:
 */

import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default (viteMode: { mode: string }) => {
  // 环境变量
  const VITEENV = loadEnv(viteMode.mode, process.cwd());
  return defineConfig({
    base: VITEENV.VITE_BASE_URL,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style/index.scss";',
        },
      },
    },
    server: {
      proxy: {
        [VITEENV.VITE_APP_BSAEURL]: {
          target: "http://10.10.68.211:8070",
          changeOrigin: true,
          rewrite: (path) => path.replace(`${VITEENV.VITE_APP_BSAEURL}`, ""),
        },
        // "/api": {
        //   target: "https://api-hmugo-web.itheima.net/api",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace("/api", ""),
        // },
      },
    },
  });
};
