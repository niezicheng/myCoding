// 对后台的相关数据操作
//	接口基础路径
var baseUrl = 'http://134.175.154.93:8099';


//封装ajax方法myAjax
function myAjax(url,method,successFun,errorFun,data){
	url = baseUrl + url;
	$.ajax({
		url:url,
		method:method,
		data:data,
		success:successFun,
		error:errorFun
	});
}

////////////////////////////////////////////////////////////////////////
/**
 * 栏目管理操作
 */

/**
 * 查询所有数据
 * @return {[type]} [description]
 */
function findAllCategory(handle,param){
	myAjax('/manager/category/findAllCategory','GET',function(res){
		// console.log(res.data);
		handle(res,param);
	},function(error){
		console.log(error);
	})
}

//通过父id查询栏目对象
function findCategoryByParentId(obj){
	myAjax('/manager/category/findCategoryByParentId?id='+obj.parentId,'GET',function(res){
		var parent = null;
		if(obj.parentName === '不填' || obj.parentName === '请选择'){
				parent = null
		}else{
				parent = res.data
		}
		// console.log(parent,'***********');
		var cate = {
			name:obj.name,
			no:obj.no,
			comment:obj.comment,
			parent:parent
		};
		// console.log(cate);
		saveOrUpdateCategory(cate);
		findAllCategory(findFun);
	},function(error){})
}



/**
 * 添加或修改数据
 * @param  {[type]} obj [obj对象中带有id属性则为修改该id数据，不带有id属性则为添加数据]
 * @return {[type]}     [description]
 */
function saveOrUpdateCategory(obj){
	myAjax('/manager/category/saveOrUpdateCategory','POST',function(res){
		findAllCategory(findFun);
	},function(error){
		console.log(error);
	},obj);
}


/**
 * 删除单条数据
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function deleteCategoryById(id){
	// console.log(id,'1111111');
	myAjax('/manager/category/deleteCategoryById?id='+id,'GET',function(res){
		// console.log(res);
		findAllCategory(findFun);
	},function(error){
		console.log(error);
	})
};

/**
 * 批量删除数据
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function batchDeleteCategory(arr){
	// console.log(arr.toString());
	myAjax('/manager/category/batchDeleteCategory','POST',function(res){
		findAllCategory(findFun,1);
	},function(error){
		// console.log(error);
	},{ids:arr.toString()});
}




///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 文章管理操作
 */
/**
 * 查询所有数据
 * 参数：
 * handle:查询成功回调函数
 * @return {[type]} [description]
 */

function findArticle(handle,page,pageSize,cid,param){
	myAjax('/manager/article/findArticle?page='+page+'&pageSize='+pageSize+'&categoryId='+cid,'GET',function(res){
		// console.log(res.data);
		handle(res,param);
	},function(error){
		console.log(error,'---');
	});
}


/**
 * 添加或修改数据
 * @param  {[type]} obj [obj对象中带有id属性则为修改该id数据，不带有id属性则为添加数据]
 * @return {[type]}     [description]
 */
function saveOrUpdateArticle(obj,cid,page,option){
	myAjax('/manager/article/saveOrUpdateArticle','POST',function(res){
		// console.log(option);
		if(option === '新增'){
			findArticle(findArtFun,0,pageSize,cid,1);
			// findArticle(findArtFun,0,pageSize,cid);	
		}
		if (option === '修改') {
			//查询相应所属栏目cid的文章信息
			findArticle(findArtFun,page,pageSize,cid);
		}
	},function(error){
		console.log(error);
	},obj);
}


/**
 * 删除单条数据
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function deleteArticleById(id,cid){
	// console.log(id,'1111111');
	myAjax('/manager/article/deleteArticleById?id='+id,'GET',function(res){
		findArticle(findArtFun,0,pageSize,cid,1);
	},function(error){
		console.log(error);
	})
};


/**
 * 批量删除数据
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function batchDeleteArticle(arr,cid){
	// console.log(arr.toString());
	myAjax('/manager/article/batchDeleteArticle','POST',function(res){
		findArticle(findArtFun,0,pageSize,cid,'detach');
	},function(error){
		console.log(error);
	},{ids:arr.toString()});
}




/**
 * 用户管理相关数据操作
 */

/**
 * 查询所有用户数据
 * @param  {[type]} handle [description]
 * @return {[type]}        [description]
 */
function findAllUser(handle){
	myAjax('/manager/user/findAllUser','GET',function(res){
		handle(res);
	},function(error){
		console.log(error);
	})
} 


/**
 * 添加或修改用户信息
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function saveOrUpdateUser(obj){
	myAjax('/manager/user/saveOrUpdateUser','POST',function(res){
		findAllUser(findUserFun);
	},function(error){
		console.log(error);
	},obj)
}

/**
 * 删除单个用户信息
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function deleteUserById(id){
		myAjax('/manager/user/deleteUserById?id='+id,'GET',function(res){
			findAllUser(findUserFun);
		},function(error){
			console.log(error);
		});
}

