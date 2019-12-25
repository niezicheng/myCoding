import request from '@/utils/request';

//查询所有职员信息
export async function queryRechange(params) {
  return request('/api/recharge/query',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}
