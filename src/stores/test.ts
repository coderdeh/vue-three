/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description: 
 */
import { defineStore } from 'pinia'

export const userTestStore = defineStore('test', {
  state: ()=> {
    return {
      count: 0
    }
  },
  getters:{
    doubleCount: (state) => state.count * 2,
    threeCount(){
      return  this.count * 3
    }
  },
  actions:{
    incrementCount(){
      this.count += 1
    }
  }
})