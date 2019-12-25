import request from '@/utils/request';

//查询所有职员信息
export async function queryAccount(params) {
  return request('/api/account/query',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}