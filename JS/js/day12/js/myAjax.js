//验证封装的myAjax函数
// findAllCategory();
//通过id删除单条数据
deleteCategoryById({id:1767});
//新增和修改
var obj = {
	name:'nzcTest',
	comment:'nzcTest',
	no:100
};
// var arr = [];
for(var i=0;i<5;i++){
	var temp = JSON.parse(JSON.stringify(obj));
	temp.name = temp.name+i;
	// saveOrUpdateCategory(temp);
	
	// arr.push(temp);
}
// saveOrUpdateCategory();
//批量删除
batchDeleteCategory({ids:[2045,2046].join()});
//批量删除
function batchDeleteCategory(obj){
	myAjax('POST','/manager/category/batchDeleteCategory',obj,function(res){
		// console.log(res,'批量删除');
		findAllCategory();
	},function(error){
		console.log(error);
	});
}


//新增和修改
function saveOrUpdateCategory(obj){
	myAjax('POST','/manager/category/saveOrUpdateCategory',obj,function(res){
		// console.log(res,'保存或修改');
		findAllCategory();
	},function(error){
		console.log(error);
	})
}

//单个删除
function deleteCategoryById(obj){
	myAjax('GET','/manager/category/deleteCategoryById',obj,function(res){
		// console.log(res,'单条数据删除');
		findAllCategory();
	},function(){});
}

//查找category的数据
function findAllCategory(){
	myAjax('GET','/manager/category/findAllCategory','',function(res){
		// console.log(res);
	},function(error){
		// console.log(error,'++++');
		// console.log(error);
	});
}


//get无参数
//get有参数	拼接在url后，查询字符串
//post无参数
//post有参数
function myAjax(method,url,param,handle,handle2){
	//后台服务器地址及端口号
	var baseUrl =  'http://134.175.154.93:8099';
	//前端传递给后台的参数
	//handle当内部的异步执行成功的回调函数，需要将后台返回的数据交给handle
	var http = new XMLHttpRequest();
	//处理get有参数
	if(method === 'GET' && param){
		url += '?'+encodeFormData(param);
	}
	http.open(method,baseUrl+url);
	http.onreadystatechange = function(){
		if (http.status === 200 && http.readyState === 4) {
			// console.log('请求成功！！！');
			handle(JSON.parse(http.responseText));
		}
		if(http.status !== 200){
			// console.log(http.readyState)
			handle2(http.responseText);
		}
	};
	//处理post有参数
	if (method === 'POST' && param) {
		//设置Content-Type 为表单格式
		http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
		http.send(encodeFormData(param));
	}else{
		http.send();
	}
	
}

//将js的对象转换成表单格式数据
function encodeFormData(data){
	if(!data){
		return "";
	}
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)){
			continue;
		}
		if(typeof data[name] == "function"){
			continue;
		}
		var value = data[name].toString();
		name = encodeURIComponent(name.replace("%20","+"));//编码名字
		value = encodeURIComponent(value.replace("%20","+"));//编码值
		pairs.push(name+"="+value);
	}
	return pairs.join('&');
}