//article的service
import axios from '../utils/axios';

export const findArticle = (params)=>{
  return axios.get('/manager/article/findArticle',{params});
}

// import request from '../utils/request';

// export function query() {
//   return request('/api/users');
// }


