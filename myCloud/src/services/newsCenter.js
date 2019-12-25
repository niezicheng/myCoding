import request from '@/utils/request';

//查询所有日志信息
export async function querynewsCenter(params) {
  // console.log(params,'_______')
  return request('/api/notice/pageQuery',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}

//添加或修改News信息
export async function addOrUpdateNews(params) {
  // console.log(params,'+++++++++++');
  return request('/api/notice/saveOrUpdate',{
    method:'POST',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}

//删除News信息
export async function deleteNews(params) {
  return request('/api/notice/deleteById',{
    method:'GET',
    params,
    header:{'Content-Type':'application/x-www-form-urlencoded'},
  });
}