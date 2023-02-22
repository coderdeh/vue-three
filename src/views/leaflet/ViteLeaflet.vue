<!--
 * @Author: coderdeh
 * @Date: 2022-07-15 11:21:36
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-08-18 15:46:49
 * @FilePath: \VueThree\src\views\leaflet\ViteLeaflet.vue
 * @Description: 
-->
<template>
  <div
    class="mapContainer"
    ref="mapContainer"
  ></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue"
import { useLeafletStore } from "@/stores/leaflet"
import LMapOperate from "@/utils/LMap"
import { reqPointList, updatePointList } from "@/api/points"
import { bd09togcj02, gcj02towgs84 } from "./src/transition"

const LeafletMap = useLeafletStore()
const mapContainer = ref()
const LMAP = ref()

const getPointLsit = async () => {
  const res = await reqPointList()
  const { success, data } = res
  if (success) {
    data.forEach((item) => {
      const GCJPoint = bd09togcj02(Number(item.posX), Number(item.posY))
      const efPoint = gcj02towgs84(Number(GCJPoint[0]), Number(GCJPoint[1]))
      // console.log(`转化后的84坐标为${efPoint}`)
      item.posX = efPoint[0]
      item.posY = efPoint[1]
    })
    updatePointList(data)
  }
}

let pointArray = [
  // {
  //   name: "齐河县表白寺第二中心幼儿园",
  //   lng: 116.939698,
  //   lat: 36.883858
  // },
  // {
  //   name: "大黄乡西赵村基督教活动场所",
  //   lng: 116.786588,
  //   lat: 37.015188
  // },
  {
    name: "大黄乡韩庄村基督教活动场所",
    lng: 116.403415,
    lat: 39.924062
  }
  // {
  //   name: "祝阿镇古城基督教活动场所",
  //   lng: 116.848366,
  //   lat: 36.774604
  // },
  // {
  //   name: "祝阿镇龙泉社区基督教活动场所",
  //   lng: 116.773325,
  //   lat: 36.703988
  // },
  // {
  //   name: "山东威迪家具有限公司",
  //   lng: 116.86538,
  //   lat: 36.803226
  // },
  // {
  //   name: "齐河县飞翔化工经贸有限公司务头加油站",
  //   lng: 116.562337,
  //   lat: 36.645698
  // },
  // {
  //   name: "客运中心（上行）",
  //   lng: 116.776545,
  //   lat: 36.816311
  // },
  // {
  //   name: "客运中心（下行）1",
  //   lng: 116.775359,
  //   lat: 36.815358
  // },
  // {
  //   name: "客运中心（下行）2",
  //   lng: 116.776895,
  //   lat: 36.815466
  // },
  // {
  //   name: "齐河高铁站公交枢纽（下行）",
  //   lng: 116.869212,
  //   lat: 36.849498
  // }
]

const tranPoint = () => {
  pointArray.forEach((item) => {
    console.log(item.name)
    const GCJPoint = bd09togcj02(Number(item.lng), Number(item.lat))
    const efPoint = gcj02towgs84(Number(GCJPoint[0]), Number(GCJPoint[1]))
    console.log(`转换后的84坐标为：${efPoint}`)
  })
}

onMounted(async () => {
  // 初始化地图
  await nextTick(() => {
    LeafletMap.INIT_LEAFLET(mapContainer.value)
  })
  // 初始化leaflet类
  LMAP.value = new LMapOperate(LeafletMap.MAP)

  // 请求数据 将百度坐标转化为84坐标
  // getPointLsit()
  tranPoint()
})
</script>

<style lang="scss" scoped>
.mapContainer {
  width: 100%;
  height: 100%;
}
</style>
