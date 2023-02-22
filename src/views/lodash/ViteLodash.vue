<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description:
-->
<template>
  <div class="lodash-wrap">
    Lodash是一个一致性、模块化、高性能的JavaScript实用工具库。 https://www.lodashjs.com/

    <div class="lui-column-bg">
      <div class="lui-inner"></div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>import { GlobalProperties } from "@/utils/types"
import { inject } from "vue"

const globalProperties: GlobalProperties = inject("vueGlobalProperties")
const { $lodash } = globalProperties

// 数据拆分
const chunkArray = $lodash.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
console.log(chunkArray)

// 剔除数组中的非假值元素
const compactArray = $lodash.compact([
  0,
  1,
  "",
  "coderdeh",
  null,
  undefined,
  false,
  true,
  NaN,
  Symbol("coderdeh")
])
console.log(compactArray)

// 数组拼接
const concatArray = $lodash.concat([1, "coderdeh"], 2, [3])
console.log(concatArray)

// 剔除数组中给定的值
const differenceArray = $lodash.difference(['daieh', 'coderdeh', 333,666,999],[333, 999, 'daieh'])
console.log(differenceArray)

// 根据比较条件剔除数据中的给定值
const differenceByArray = $lodash.differenceBy([3.2, 3.6, 1.9], [3.1,2], Math.round)
console.log(differenceByArray)

// 根据
</script>
<style lang="scss" scoped>
.lodash-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #010b21;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}
.lui-column-bg {
  position: relative;
  width: 30px;
  height: 300px;
  transform: rotateZ(90deg);
  margin: 100px auto;
  background-color: rgba(0, 199, 159, 0.2);
}
.lui-column-bg:before {
  position: absolute;
  content: '';
  display: block;
  height: 5%;
  width: 100%;
  border-radius: 50%;
  top: -8.5px;
  z-index: 1;
  background-color: rgba(0, 199, 159, 0.2);
}

.lui-column-bg:after {
  position: absolute;
  content: '';
  display: block;
  height: 20px;
  width: 100%;
  border-radius: 50%;
  bottom: -11px;
  background-color: rgb(0, 255, 204);
}

.lui-inner {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to top, rgb(0, 255, 204), rgb(0, 199, 159));
  text-align: center;
}
.lui-inner::before {
  position: absolute;
  content: '';
  display: block;
  height: 20px;
  width: 100%;
  background-color: rgb(14, 190, 140);
  border-radius: 50%;
  top: -11px;
  z-index: 1;
}
.lui-inner:after {
  position: absolute;
  content: '';
  display: block;
  height: 15px;
  width: 100%;
  border-radius: 50%;
  background-color: white;
  bottom: -10px;
}
</style>
