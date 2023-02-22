/*
 * @Author: coderdeh
 * @Date: 2022-07-15 15:44:45
 * @LastEditors: coderdeh
 * @LastEditTime: 2022-08-18 10:00:18
 * @FilePath: \VueThree\src\request\index.ts
 * @Description:
 */
import * as qs from "qs";
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

function decorateService(service: AxiosInstance) {
  // 请求拦截
  service.interceptors.request.use(
    // 请求配置
    (config: AxiosRequestConfig) => {
      if (!config.headers) {
        config.headers = {};
      } else if (
        config.data &&
        Object.prototype.toString.call(config.data) === "[object Object]"
      ) {
        config.data = qs.stringify(config.data);
      }
      // 设置token
      config.headers["accessToken"] = "0fe5a8ce-5af9-4333-bde0-71b3b9c81088";
      return config;
    },
    (error: AxiosError) => {
      // 做一些请求错误
      Promise.reject(error);
    }
  );

  // 响应拦截器
  service.interceptors.response.use(
    // 响应成功处理, 状态: 200
    (response: AxiosResponse) => {
      const result = response.data;
      return result;
    },
    // 响应失败处理, 状态: !200
    (error: AxiosError) => {
      console.log(error.message);
      return Promise.reject(error);
    }
  );
}

const servicesOptions = {
  axiosSvc: {
    timeout: 1000 * 20,
    baseURL: import.meta.env.VITE_APP_BSAEURL,
  },
};

function getServices(options: any) {
  const res: any = {};
  Object.keys(options).forEach((svcName) => {
    res[svcName] = axios.create(options[svcName]);
    decorateService(res[svcName]);
  });
  return res;
}

export default getServices(servicesOptions);
