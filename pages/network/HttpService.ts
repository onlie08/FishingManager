// src/utils/HttpService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'https://YOUR_APP_ID.lc-cn-n1-shared.com/1/', // 替换为您的 LeanCloud baseURL
  timeout: 10000,
});

// 添加请求拦截器
// instance.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // 在请求头中添加 token（如果需要）
//     const token = localStorage.getItem('token'); // 根据您的存储方案调整
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // 直接返回数据
  },
  (error) => {
    // 处理请求错误
    console.error('Network error:', error);
    return Promise.reject(error); // 返回拒绝的promise
  }
);

// 网络请求管理类
class HttpService {
  static get<T>(url: string, params?: any): Promise<T> {
    return instance.get(url, { params });
  }

  static post<T>(url: string, data?: any): Promise<T> {
    return instance.post(url, data);
  }

  static put<T>(url: string, data?: any): Promise<T> {
    return instance.put(url, data);
  }

  static delete<T>(url: string, data?: any): Promise<T> {
    return instance.delete(url, { data });
  }
}

export default HttpService;
