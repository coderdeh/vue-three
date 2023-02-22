<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <div class="comp-four">
    <el-button @click="handleData">修改根组件provideData的值</el-button>
    <ul class="model-val">
      <li>
        <span class="label">姓名：</span>
        <span class="value">{{provideData.name}}</span>
      </li>
      <li>
        <span class="label">学号：</span>
        <span class="value">{{provideData.code}}</span>
      </li>
      <li>
        <span class="label">学校：</span>
        <span class="value">{{provideData.school}}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { inject } from "vue";

interface ProvideType {
  name: string,
  code: string,
  school: string
}
const provideData = inject('provideData') as ProvideType
const changeProvide = inject('changeProvide') as Function

const handleData = () =>{
  changeProvide()
}
</script>
<style lang="scss" scoped>
.comp-four{
  .model-val{
    padding: 0 20px 20px;
    span{
      display: inline-block;
      line-height: 32px;
    }
    .label{
      color: #666;
    }
    .value{
      color: #333;
    }
  }
}
</style>