<!--
 * @Author: coderdeh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <div class="value_wrap">
    <div class="title">父组件向子组件传值--{{state.fatherToSon}}</div>
    <el-button @click="changeMessage">修改fatherToSon数据</el-button>
    <ChildCompOne :fatherToSon="state.fatherToSon"></ChildCompOne>

    <div class="title">子组件向父组件传值--{{state.sonToFather}}</div>
    <ChildCompTwo @sonTransFather="sonTransFather"></ChildCompTwo>

    <div class="title">父子组件双向数据绑定v-model</div>
    <ChildCompThree v-model="state.modelName" v-model:address="state.modelAddress"></ChildCompThree>

    <div class="title">父子组件通信——provide/inject</div>
    <ChildCompFour></ChildCompFour>
  </div>
</template>

<script setup lang="ts">
import { reactive, provide } from 'vue'
import ChildCompOne from './ChildCompOne.vue'
import ChildCompTwo from './ChildCompTwo.vue'
import ChildCompThree from './ChildCompThree.vue'
import ChildCompFour from './ChildCompFour.vue'

const state = reactive({
  fatherToSon: '用于父组件向子组件传递的数据',
  sonToFather: '用于子组件向父组件传递的数据',
  modelName: 'coderdeh',
  modelAddress: '河南驻马店'
})
interface ProvideType {
  name: string,
  code: string,
  school: string
}
const provideData:ProvideType = reactive({
  name: 'daieh',
  code: '081416107',
  school: '河南城建'
})
const changeProvide = () =>{
  provideData.name = `coderdeh${Math.floor(Math.random() * 10)}`
}

provide('provideData', provideData)
provide('changeProvide', changeProvide)

const changeMessage = () =>{
  state.fatherToSon = `父组件修改fatherToSon数据：${Math.floor(Math.random() * (100 - 50) + 50)}`
}

const sonTransFather = (value = '') =>{
  state.sonToFather = value
}

</script>

<style lang="scss" scoped>
.value_wrap{
  width: 100%;
  height: 100%;
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
