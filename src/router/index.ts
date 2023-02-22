/*
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/ViteIndex.vue"),
      redirect: "/pinia",
      children: [
        {
          path: "/pinia",
          name: "Pinia",
          component: () => import("@/views/pinia/VitePinia.vue"),
        },
        {
          path: "/leaflet",
          name: "Leaflet",
          component: () => import("@/views/leaflet/ViteLeaflet.vue"),
        },
        {
          path: "/previewFile",
          name: "PreviewFile",
          component: () => import("@/views/preview/PreviewFile.vue"),
        },
        {
          path: "/showCode",
          name: "ShowCode",
          component: () => import("@/views/code/ShowCode.vue"),
        },
        {
          path: "/l7",
          name: "LSeven",
          component: () => import("@/views/antv/LSeven.vue"),
        },
        {
          path: "/lodash",
          name: "Lodash",
          component: () => import("@/views/lodash/ViteLodash.vue"),
        },
        {
          path: "/render",
          name: "Render",
          component: () => import("@/views/render/Render.vue"),
        },
        {
          path: "/value",
          name: "TransValue",
          component: () => import("@/views/value/TransValue.vue"),
        },
        {
          path: "/watermark",
          name: "Watermark",
          component: () => import("@/views/watermark/Watermark.vue"),
        },
      ],
    },
  ],
});

export default router;
