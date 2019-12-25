import request from '@/utils/request';

//查询所有职员信息
export async function queryStaff(params) {
  return request('/api/user/pageQuery',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}

//改变用户status【enables】
export async function changeStaffEnabled(params) {
  // console.log(params,'+++++++++++');
  return request('/api/user/changeEnabled',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}
