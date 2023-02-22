/*
 * @Author: coderdeh
 * @Date: 2022-07-15 16:13:07
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-07-15 16:13:19
 * @FilePath: \VueThree\src\utils\index.ts
 * @Description:
 */
export function isNull(str: string | number | object) {
  if (str === undefined || str === null || str === "") {
    return true;
  } else if (Array.isArray(str) && str.length === 0) {
    return true;
  } else if (typeof str === "object" && Object.keys(str).length === 0) {
    return true;
  }
  return false;
}
