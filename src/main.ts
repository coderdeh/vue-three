/*
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
 */

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import hljs from "highlight.js";
import * as lodash from 'lodash'

// init label style
import "element-plus/dist/index.css";
import "normalize.css/normalize.css";
import "./style/global.scss";
import "highlight.js/styles/monokai-sublime.css";

// npm i --save-dev @types/leaflet  安装leaflet ts 类型声明文件
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { pointCorrection } from "@shzl/shzl-leaflet";
window.L = L;
pointCorrection(L);


const app = createApp(App);

//自定义一个代码高亮指令
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block);
  });
});

// 自定义一个聚焦指令
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

// 定义全局变量
app.provide("vueGlobalProperties", {
  $this: app.config.globalProperties,
  name: "coderdeh",
  $lodash: lodash
});

app.use(createPinia()).use(router).use(ElementPlus);

app.mount("#app");
