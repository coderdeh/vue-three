<!--
 * @Author: coderdeh
 * @Date: 2022-07-14 16:05:11
 * @LastEditors: daieh
 * @LastEditTime: 2023-02-13 10:10:17
 * @FilePath: \VueThree\src\App.vue
 * @Description: 
-->
<template>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted } from "vue"

onMounted(() => {
  // vite内置环境变量
  // console.log('MODE', import.meta.env.MODE);
  // console.log('BASE_URL', import.meta.env.BASE_URL);
  // console.log('PROD', import.meta.env.PROD);
  // console.log('DEV', import.meta.env.DEV);
  // 自定义环境变量
  // console.log('VITE_BASE_URL', import.meta.env.VITE_BASE_URL);
})
</script>
