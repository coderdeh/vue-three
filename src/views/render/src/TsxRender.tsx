/*
 * @Author: daieh
 * @LastEditors: daieh
 * @Description: 
 */
import { ref } from "vue"
import publicData from '../usePublicData'

let tsxTitle = ref<string>("vue3中jsx语法")

const tsxRender = () => {
  return (
    <div class="tsx-template">
      <header class="title">{ tsxTitle.value }</header>
      <div class="title">{ publicData.title }</div>
      <ul class="userinfo">
        <li>
          <span class="label">姓名</span>
          <span class="value">{publicData.userinfo.name}</span>
        </li>
        <li>
          <span class="label">年龄</span>
          <span class="value">{publicData.userinfo.age}</span>
        </li>
        <li>
          <span class="label">现居地</span>
          <span class="value">{publicData.userinfo.address}</span>
        </li>
        <li>
          <span class="label">籍贯</span>
          <span class="value">{publicData.familyBg.native}</span>
        </li>
        <li>
          <span class="label">邮编</span>
          <span class="value">{publicData.familyBg.postalCode}</span>
        </li>
      </ul>
    </div >
  )
}

export default tsxRender