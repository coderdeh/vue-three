<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description:TSX的使用
-->
<template>
  <tsxRender></tsxRender>
  <el-button @click="changePublicData">修改公共数据</el-button>
</template>
<script lang="tsx" setup>
import tsxRender from "./src/TsxRender"

import publicData from './usePublicData'

const changePublicData = () =>{
  publicData.title = `父组件-修改数据：${Math.floor(Math.random() * (100 - 50) + 50)}`
}
</script>
<style lang="scss" scoped>
@import './src/tsx.scss';
</style>