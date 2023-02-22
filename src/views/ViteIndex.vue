<!--
 * @Author: coderdeh
 * @Date: 2022-07-14 16:05:11
 * @LastEditors: daieh
 * @LastEditTime: 2023-02-22 10:28:28
 * @FilePath: \VueThree\src\views\ViteIndex.vue
 * @Description: 
-->
<template>
  <div class="home_view">
    <ul class="tab_list">
      <li class="project_title">VueThree</li>
      <li
        @click="changeRoute(item.path)"
        v-for="item in state.routerList"
        :key="item.path"
        :class="{ li_active: state.currentRoute == item.path }"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()
const state = reactive({
  routerList: [],
  currentRoute: ""
})

// 切换路由
function changeRoute(path: string): void {
  if (path == state.currentRoute) return
  state.currentRoute = path
  router.push({
    path
  })
}

onMounted(() => {
  state.currentRoute = route.path
  state.routerList = route.matched[0].children
})
</script>
<style lang="scss" scoped>
.home_view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .tab_list {
    width: 12%;
    background: #192c3e;
    height: 100vh;
    .project_title {
      background: #001529;
      text-align: center;
      font-weight: 700;
    }
    > li {
      color: #ffffff;
      box-sizing: border-box;
      padding: 0 16px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .li_active {
      background: #0fcba2;
    }
  }
  .content {
    flex: 1;
    box-sizing: border-box;
    height: 100vh;
  }
}
</style>
