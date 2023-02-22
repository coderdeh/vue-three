/*
 * @Author: coderdeh
 * @Date: 2022-07-15 16:12:14
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-07-29 16:03:11
 * @FilePath: \VueThree\src\utils\LMap.ts
 * @Description: Leaflet操作方法
 */
import type { LatLngExpression } from "leaflet";
// import { isNull } from "./util";
export default class LMapOperate {
  // 声明地图对象
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private map: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(map: any) {
    this.map = map;
  }

  // 设置鼠标样式
  setCursorStyle(style = "pointer") {
    window.L.DomUtil.addClass(this.map._container, `leaflet-cursor-${style}`);
  }

  // 设置中心点
  setMapCenter(latlng: LatLngExpression) {
    this.map.panTo(latlng);
  }

  // 设置地图层级
  setMapZoom(zoom: number) {
    this.map.setZoom(zoom);
  }

  // 设置地图中心点和层级
  setCenterAndZoom(center: LatLngExpression, zoom: number): void {
    this.map.setView(center, zoom);
  }

  // 删除所有图层
  removeLayers() {
    const layers: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.map.eachLayer((layer: any) => {
      if (layer._container) {
        const className = layer._container.className.toString();
        if (className.indexOf("leaflet-layer") === -1) {
          layers.push(layer);
        }
      } else {
        layers.push(layer);
      }
    });
    layers.map((item) => {
      item.remove();
    });
  }
}
