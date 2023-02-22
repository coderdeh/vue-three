<!--
 * @Author: coderdeh
 * @Date: 2022-07-16 16:37:28
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-07-29 16:04:18
 * @FilePath: \VueThree\src\views\code\ShowCode.vue
 * @Description: 
-->
<template>
  <div class="code_wrap" v-highlight>
    <pre class="pre">
      <code>{{ state.codeContext }}</code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  codeContext: `
    // 显示代码块
    console.log('DEV', import.meta.env.DEV);
  `,
});
</script>
<style lang="scss" scoped>
.code_wrap {
  padding: 16px;
}
</style>
