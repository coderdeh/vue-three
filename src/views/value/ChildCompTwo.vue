<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <el-button @click="transVal">子组件修改sonToFather数据</el-button>
  <div class="child-comp">
    <span class="label">子组件向父组件传递的数据：</span>
    <span class="value">{{state.sonToFather}}</span>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const emit = defineEmits(['sonTransFather'])

const state = reactive({
  sonToFather: '用于子组件向父组件传递的数据'
})
const transVal = () =>{
  state.sonToFather = `父组件修改fatherToSon数据：${Math.floor(Math.random() * 50)}`
  emit('sonTransFather', state.sonToFather)
}
</script>

<style lang="scss" scoped>
.child-comp{
  padding: 20px;
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
</style>