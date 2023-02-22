/*
 * @Author: coderdeh
 * @LastEditors: coderdeh
 * @Description: 
 */


import request from "@/request";
const { axiosSvc } = request;

export const reqPointList = () =>
  axiosSvc.get(`/compute/api/emphasisPlace/v1/list`);

export const updatePointList = (data) =>{
  axiosSvc({
    method: 'post',
    url: '/compute/api/emphasisPlace/v1/update',
    data
  })
}
