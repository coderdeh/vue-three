<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <div class="water-mark-wrap" ref="waterMarkWrap">
    <div class="title">使用canvas为ElementDOM添加水印</div>
  </div>
</template>
<script setup>
import { onMounted , ref} from "vue"
const waterMarkWrap = ref()
const canvasWaterMark = (angle = -20, txt = 'code by coderdeh', fillStyle = '#ff00ff') => {
  const canvas = document.createElement("canvas")
  canvas.height = 230
  canvas.width = 380
  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, 180, 100)
  ctx.fillStyle = fillStyle
  ctx.globalAlpha = 0.8
  ctx.font = "18px serif"
  ctx.rotate((Math.PI / 180) * angle)
  ctx.fillText(txt, 0, 100)
  return canvas.toDataURL()
}

const data1 = [
  { 
    id: 1, 
    children: [
      { id: 2 },
      { id: 3 }
    ]
  }
]
const data2 = [
  { id: 2, 
    children: [
      {id: 4}
    ]
  }
]
data2.forEach(item =>{
  const index = data1[0].children.findIndex(itm => itm.id === item.id)
  data1[0].children[index] = item
})
console.log(data1)

onMounted(() => {
  const imageUrl = canvasWaterMark()
  waterMarkWrap.value.style.backgroundImage = `url(${imageUrl})`

})
</script>

<style lang="scss" scoped>
.water-mark-wrap{
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-repeat: repeat;
  .title{
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgb(166, 196, 239);
    color: #fff;
    font-weight: 600;
  }
}
</style>