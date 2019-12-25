//axios的使用
//引入axios
const axios = require('axios');
// console.log(axios);

axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then(function(re){
	console.log(re.data);	//经过axios封装后的数据  后台返回的数据在返回数据的data属性中
}).catch(function(error){
	console.log(error);
});	//传递数据均为JSON格式  Ajax为表单格式

