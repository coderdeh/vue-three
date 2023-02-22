/*
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
 */
import { reactive } from "vue"
interface UserInfo {
  name: string,
  age: number,
  address: string
}
interface FamilyBg {
  native: string,
  postalCode: string
}
interface StateType {
  title: string,
  userinfo: UserInfo
  familyBg: FamilyBg
}

const state: StateType = {
  title: '子组件-个人信息展示',
  userinfo: {
    name: 'daieh',
    age: 20,
    address: '浙江省杭州市滨江区'
  },
  familyBg: {
    native: '河南省驻马店市',
    postalCode: '463300'
  }
}

const publicData = reactive(state)
export default publicData