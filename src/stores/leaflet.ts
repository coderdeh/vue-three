/*
 * @Author: coderdeh
 * @Date: 2022-07-14 16:05:11
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-08-18 17:09:16
 * @FilePath: \VueThree\src\stores\leaflet.ts
 * @Description:
 */
import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";

// 构建方式1：通过vuex的方式构建
export const useLeafletStore = defineStore("leaflet", () => {
  // 地图对象
  const MAP = ref();

  const state = reactive({
    // 中心点
    LMapCenter: [36.78240730377142, 116.75085604190828],
  });

  // 初始化地图方法
  function INIT_LEAFLET(dom: HTMLElement): void {
    MAP.value = window.L.map(dom, {
      center: window.L.latLng(state.LMapCenter[0], state.LMapCenter[1]),
      zoom: 10,
      maxZoom: 18,
      minZoom: 3,
      zoomControl: false, // 默认的放大缩小插件是英文的
      attributionControl: false, // 是否显示leaflet广告
      closePopupOnClick: false, // 点击地图时，不关闭弹窗
    });
    // 加载底图
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.L.tileLayer as any)
      .chinaProvider("GaoDe.Normal.Map", {
        // custom: true,
        maxZoom: 18,
        minZoom: 5,
      })
      .addTo(MAP.value);
  }
  return {
    ...toRefs(state),
    MAP,
    INIT_LEAFLET,
  };
});
