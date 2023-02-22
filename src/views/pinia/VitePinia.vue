<!--
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description: 
-->

<template>
  <div class="pinia_wrap">
    <div class="pinia_title">Pinia在Vue3中的使用</div>
    <ul class="pinia_list">
      <li>userName的值：{{ authorityPinia.userName }}</li>
      <li>finialyName的值：{{ authorityPinia.finialyName }}</li>
      <li class="pinia_inp">
        <el-input v-model="state.username"></el-input>
        <el-button @click="authorityPinia.reviseName(state.username)">userName修改</el-button>
      </li>
    </ul>

    <ul class="pinia_list">
      <li>count的值为：{{testPinia.count}}</li>
      <li>doubleCount的值为：{{testPinia.doubleCount}}</li>
      <li>threeCount的值为：{{testPinia.threeCount}}</li>
      <el-button @click="testPinia.incrementCount">调用定义的方法修改count</el-button>
      <el-button @click="testPinia.$patch({count: testPinia.count += 2})">调用$patch修改count</el-button>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue"
import { useAuthorityStore } from "@/stores/authority"
import { userTestStore } from "@/stores/test"
const authorityPinia = useAuthorityStore()
const testPinia = userTestStore()

const state = reactive({
  username: authorityPinia.userName
})

// 监听counterPinia的值
watch(
  () => authorityPinia.userName,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  {
    deep: true,
    immediate: false
  }
)
</script>

<style lang="scss" scoped>
.pinia_wrap {
  padding: 16px;
  .pinia_title {
    margin-bottom: 16px;
    font-weight: 700;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .pinia_list {
    > li {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .pinia_inp {
      :deep(.el-input) {
        width: 300px;
        margin-right: 20px;
      }
    }
  }
}
</style>
