/*
 * @Author: coderdeh
 * @LastEditors: daieh
 * @Description: 
 */
import { Scene, PolygonLayer, LineLayer, PointLayer } from "@antv/l7"
import { Mapbox, GaodeMap } from "@antv/l7-maps"

// 初始化L7场景
export const initScene = () => {
  return new Scene({
    id: "antv-map",
    logoVisible: false,
    // type: "amap",
    stencil: true,
    map: new GaodeMap({
      pitch: 45,
      style: "amap://styles/a8d4320671f2c72841d63795fd4837d6?isPublic=true",
      token: 'f3e9c993c516afa3eeb7d20f21acfa82',
      center: [104.288144, 31.239692],
      zoom: 13
    })
  })
}

// 读取本地json文件
export const reloadFiles = (url = '') => {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(data => {
      if (data) {
        resolve(data)
      } else {
        reject('')
      }
    })
  })
}

// 创建L7-geojson网格图层
export const addGeojsonLayer = (data = null) => {
  return new PolygonLayer({
    name: 'chinaGeojsonLayer',
    autoFit: true,
    zIndex: 1
  })
    .source(data)
    .color("name", [
      "rgb(255,255,217)",
      "rgb(237,248,177)",
      "rgb(199,233,180)",
      "rgb(127,205,187)",
      "rgb(65,182,196)",
      "rgb(29,145,192)",
      "rgb(34,94,168)",
      "rgb(12,44,132)"
    ])
    .shape("extrude")
    .size('childrenNum', (num) => num * 10000)
    .active({ color: '#ff00ff' })
    .style({
      opacity: 1
    })
}

// 创建线图层
export const addLineLayer = (data = null, color = '#fff') => {
  return new LineLayer({
    name: 'lineLayer',
    zIndex: 2,
  })
    .source(data)
    .shape('line')
    .color(color)
    .size(0.6)
    .style({
      lineType: "dash",
      dashArray: [2, 2],
      opacity: 1
    })
}

// 创建一个空的线图层
export const nullLineLayer = (color = '#fff') => {
  return new LineLayer({
    // id: 'nullLineLayerId',
    name: 'nullLineLayer',
    zIndex: 3,
  })
    .source({
      type: 'FeatureCollection',
      features: []
    })
    .shape('line')
    .size([1, 2])
    .color(color)
    .style({
      opacity: 1
    })

}

// 创建点位图层
export const addPointLayer = (data = null) => {
  return new PointLayer({
    name: 'pointLayer',
    zIndex: 4
  })
    .source(data, {
      parser: {
        type: "json",
        coordinates: "center"
      }
    })
    .color("#0fcba2")
    .shape("name", "text")
    .size(12)
    .style({
      opacity: 1,
      stroke: "#0fcba2",
      strokeWidth: 0,
      padding: [5, 5],
      textAllowOverlap: false
    })
}


