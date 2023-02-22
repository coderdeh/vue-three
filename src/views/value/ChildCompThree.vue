<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <div class="comp-three">
    <el-button @click="handleData">子组件修改vModel的值</el-button>
    <ul class="model-val">
      <li>
        <span class="label">姓名：</span>
        <span class="value">{{props.modelValue}}</span>
      </li>
      <li>
        <span class="label">地址：</span>
        <span class="value">{{props.address}}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
/**
 * 在自定义组件中使用v-model时，v-model的默认props属性名和事件名更改了，更改为modelValue 和 update:modelValue，并且移除了model选项，但同时也支持多个数据的双向绑定
**/
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue','update:address'])
const handleData = () => {
  emit('update:modelValue', `新名字${Math.floor(Math.random() * 50)}`)
  emit('update:address', `新地址${Math.floor(Math.random() * 50 + 50)}`)
}
</script>
<style lang="scss" scoped>
.comp-three{
  .model-val{
    padding: 0 20px 20px;
    span{
      display: inline-block;
      line-height: 32px;
    }
  }
}
</style>