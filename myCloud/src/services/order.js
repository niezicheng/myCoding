import request from '@/utils/request';

//查询所有职员信息
export async function queryOrder(params) {
  return request('/api/order/query',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}


