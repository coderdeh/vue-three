/*
 * @Author: coderdeh
 * @Date: 2022-07-15 12:34:55
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-07-15 17:39:59
 * @FilePath: \VueThree\src\stores\authority.ts
 * @Description:
 */
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 构建方式2：通过function的方式构建
export const useAuthorityStore = defineStore("authority", () => {
  const userName = ref("coderdeh");

  const finialyName = computed(() => userName.value + "goodLuck");

  function reviseName(name: string) {
    userName.value = name;
  }

  return {
    userName,
    finialyName,
    reviseName,
  };
});
