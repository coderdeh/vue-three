<!--
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
-->
<template>
  <div class="child-comp">
    <span class="label">父组件向子组件传递的message数据：</span>
    <span class="value">{{props.fatherToSon}}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['fatherToSon'])
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