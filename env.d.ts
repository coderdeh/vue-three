/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description:
 */
interface ImportMeta {
  env: {
    VITE_APP_BSAEURL: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BASE_URL(BASE_URL: any): import("vue-router").RouterHistory;
    GITHUB_AUTH_TOKEN: string;
    NODE_ENV: "development" | "production";
    PORT?: string;
    PWD: string;
  };
}
