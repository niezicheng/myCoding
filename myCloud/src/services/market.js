import request from '@/utils/request';

//查询所有职员信息
export async function queryMarket(params) {
  return request('/api/user/pageQuery',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}

//删除单条数据信息
// export async function deleteMarket(params) {
//   return request('/api/user/pageQuery',{
//     method:'GET',
//     params,
//     header:{'Content-Type':'application/x-www-form-urlencoded'},
//   });
// }


