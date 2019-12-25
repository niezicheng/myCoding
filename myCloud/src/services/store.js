import request from '@/utils/request';

//查询所有职员信息
export async function findStoreByBusinessId(params) {
  return request('/api/store/findStoreByBusinessId',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}
