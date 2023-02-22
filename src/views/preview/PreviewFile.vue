<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <ul class="txt">
    <li>docx文件预览</li>
    <el-button>开始预览</el-button>
  </ul>
  <ul class="txt">
    <li>PDF文件预览</li>
    <el-button>开始预览</el-button>
  </ul>
</template>
<script setup lang="ts">
import { defaultOptions, renderAsync } from "docx-preview"
console.log(renderAsync, 111111111)
</script>
<style lang="scss" scoped>
.txt {
  padding: 16px;
}
</style>
