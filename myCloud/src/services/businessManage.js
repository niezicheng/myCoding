import request from '@/utils/request';

//查询所有详细日志信息
export async function querybusinessManage(params) {
  // console.log(params,'_______')
  return request('/api/busines/pageQuery',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}