import config from './config'
//axios的配置
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = config.baseURL;
// 拦截器
// 拦截响应
axios.interceptors.response.use((response) => {
  // 响应成功后拦截
  // console.log(response, '++++++++');
  // response是axios已经封装过后的数据，response.data是服务器返回的数据
  // 封装返回的数据
  let res = {
    ...response,
    data: response.data.data,
    status: response.data.status,
    statusText: response.data.message
  };
  return res;
}, (error) => {
  // 响应失败后拦截
  return Promise.reject(error);
});
// 拦截请求
axios.interceptors.request.use((config) => {
  //请求发送前拦截处理
  // config.data是js数据，使用qs转成表单格式数据
  // console.log(config);
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  // 请求发送失败的处理
  return Promise.reject(error);
});

export default axios;