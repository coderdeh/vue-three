<!--
 * @Author: coderdeh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <ul class="antv-l7">
    <li class="antv-title">Antv L7</li>
    <li id="antv-map"></li>
  </ul>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import {
  reloadFiles,
  initScene,
  addGeojsonLayer,
  addLineLayer,
  addPointLayer,
  nullLineLayer
} from "./src/location-seven-map"

const geoUrl =
  "https://gw.alipayobjects.com/os/bmw-prod/d6da7ac1-8b4f-4a55-93ea-e81aa08f0cf3.json"
const markUrl =
  "https://gw.alipayobjects.com/os/bmw-prod/c4a6aa9d-8923-4193-a695-455fd8f6638c.json"

const lScene = ref()
// 初始化L7
const init = () => {
  lScene.value = initScene()

  lScene.value.on("loaded", async () => {
    const geojsonData = await reloadFiles(geoUrl)

    // geojson网格边界图层
    const chinaPolygonLayer = addGeojsonLayer(geojsonData)
    lScene.value.addLayer(chinaPolygonLayer)

    // 绘制geojson边界
    const gridLineLayer = addLineLayer(geojsonData, "#ffffff")
    // lScene.value.addLayer(gridLineLayer)

    // 创建一个空的geojson边界图层  作为图层的高亮图层
    const hightLineLayer = nullLineLayer("#ff0000")
    lScene.value.addLayer(hightLineLayer)

    // 网格添加字体
    const txtData = await reloadFiles(markUrl)
    const txtLayer = addPointLayer(txtData)
    lScene.value.addLayer(txtLayer)

    // 网格的点击事件
    chinaPolygonLayer.on("click", (e) => {
      const { feature } = e
      // 修改当前点击网格的边界颜色
      hightLineLayer
        .setData({
          type: "FeatureCollection",
          features: [feature]
        })
        .color("#ff0000")
        .animate({
          duration: 4,
          interval: 1,
          trailLength: 1
        })

      const nullLayer = lScene.value.getLayer("nullLineLayerId")
      console.log("nullLayer", nullLayer)
    })
  })
}
onMounted(init)
</script>
<style lang="scss" scoped>
@import './src/l7.scss'
</style>
