//axios的配置
import axios from 'axios';
import config from './config';
import qs from 'qs';

axios.defaults.baseURL = config.baseURL;
//拦截器

//请求发送前拦截
axios.interceptors.request.use((config)=>{
  //请求发送拦截处理
  // console.log(config,'+++++++++++');
  //axios中post方式request中默认发送的数据为JSON格式数据保存在config数据中，使用qs转化js对象为表单格式数据
  if(config.method === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error)=>{
  //请求发送拦截失败处理
  return Promise.reject(error)
})
//响应回来后拦截处理
axios.interceptors.response.use((response)=>{
  //响应成功后拦截
  // console.log(response,'++++++++++');
  //respone为axios已经封装过后的数据
  //封装返回的数据
  let res = {...response,
    data:response.data.data,
    status:response.data.status,
    statusText:response.data.message
  }
  return res;
},(error)=>{
  //响应失败后拦截
  return Promise.reject(error);
})


export default axios;