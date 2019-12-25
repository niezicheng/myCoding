import axios from '@/utils/axios';

export async function getArticle(params): Promise<any> {
  return axios.get('/manager/article/findArticle',{ params });
}

export async function deleteData(params): Promise<any> {
  // console.log(3);
  return axios.get('/manager/article/deleteArticleById',{ params });
}






// import request from '@/utils/request';

// export async function query(): Promise<any> {
//   return request('/api/users');
// }

// export async function queryCurrent(): Promise<any> {
//   return request('/api/currentUser');
// }

// export async function queryNotices(): Promise<any> {
//   return request('/api/notices');
// }
