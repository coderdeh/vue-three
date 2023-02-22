/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description:
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.pdf'{
  export default unknown
}
declare module '*.txt'{
  export default unknown
}