/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description: 
 */


import request from "@/request";
const { axiosSvc } = request;

/**
 * 轮播图
 * url: /swiperdata
 * method: get
 */
export const reqHomeSwiper = () =>
  axiosSvc.get(`/api/public/v1/home/swiperdata`);
