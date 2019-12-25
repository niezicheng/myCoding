/*
	q1:line 61 首次获取外部css中已添加的style指定属性值却为空串【使用style属性只能获取或或改变内联css样式属性值】
	q2:line 156  输出时展开看详细信息会报警告
	q3:line 198 批量删除后不隐藏复选框，点击删除后它visibility值本是未改变仍为visible，但元素没有显示
*/

window.onload = function(){
	//基础url
	var baseUrl = "http://134.175.154.93:8099";
	var tbody = document.getElementsByTagName('tbody')[0];
	var addOrUpdateBtn = document.getElementById('addOrUpdateBtn');
	var batchBtn = document.getElementById('batchBtn');
	var editBtn = document.getElementById('editBtn');
	var checkAllBtn = document.getElementById('checkAllBtn');

	
	/*
		在选择地点击编辑按钮后才能点击选择按钮
	*/
	editBtn.onclick = function(){
		if (editBtn.innerText === '编辑') {
			//如果隐藏则转换为显示
			visiOrHidd('hidden','visible');

			checkAllBtn.onclick = function(){
				var inputs = tbody.children;
				inputs = Array.prototype.slice.call(inputs,0);
				// console.log(inputs);
				if(checkAllBtn.innerText === '全选' && editBtn.innerText === '取消编辑'){
					inputs.forEach(function(item){
						// console.log(item.firstElementChild.firstElementChild);
						item.firstElementChild.firstElementChild.checked = true;
					});
					checkAllBtn.innerText = '取消全选';
				}else{
					inputs.forEach(function(item){
						item.firstElementChild.firstElementChild.checked = false;
					});
					checkAllBtn.innerText = '全选';
				}	
			};		
			editBtn.innerText = '取消编辑';
		}else{
			//如果显示则转换为隐藏
			visiOrHidd('visible','hidden');
			editBtn.innerText = '编辑';
		}
	};	


	/*
		选择tr的第一个孩子并对它实现显示和隐藏
	*/
	function visiOrHidd(param1,param2){
		// console.log('22222222222222');
		// console.log(document.getElementsByTagName('tr'));
		tr = document.getElementsByTagName('tbody')[0].children;
		var trArr = Array.prototype.slice.call(tr,0);
		trArr.forEach(function(item){
			// console.log(item);
			// console.log(typeof item.firstElementChild.style.visibility);  //获取的外部css样式属性值为空串
			console.log(item.firstElementChild.style.visibility); 	//使用style属性只能获取内联style属性值
			var visibility = item.firstElementChild.style.visibility;
			if(visibility === param1 || visibility === ''){
				item.firstElementChild.style.visibility = param2;
			}
		});
	}


	/*
		Ajax方法的封装
	*/
	function myAjaxs(method,url,handle,param){
		var http = new XMLHttpRequest();
		http.open(method,baseUrl+url);
		http.onreadystatechange = function(){
			// console.log(http.status);

			if (http.status === 200 && http.readyState === 4) {
				handle(http.responseText);
			}
		};
		if(method === 'POST'){
			http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
		}
		http.send(param);
	}


	/*
		查询数据并在页面上展示
	*/
	function findAllCategory(param){
		myAjaxs('GET','/manager/category/findAllCategory',function(res){
			// console.log(res);
			var data = JSON.parse(res).data;
			var str = '';
			data.forEach(function(item){
				str += `
					<tr>
						<td style="visibility:hidden;"><input type="checkbox" name=""></td>
						<td>`+item.id+`</td>
						<td>`+item.name+`</td>
						<td>`+item.comment+`</td>
						<td>`+item.no+`</td>
						<td>`+item.parent+`</td>
						<td><button>删除</button></td>
					</tr>
				`;
				// visiOrHidd('hidden','visible');

			});
			tbody.innerHTML = str;
			if (param) {
				visiOrHidd('hidden','visible');
			}

		});

	}
	//查询方法的调用
	findAllCategory();


	/*
		添加和修改数据  如果输入数据中带有id则进行更新操作【默认id是自增的】
	*/
	function saveOrUpdateCategory(obj){
		myAjaxs('POST','/manager/category/saveOrUpdateCategory',function(res){
			// console.log(JSON.parse(res).status);
			if(JSON.parse(res).status === 200){
				findAllCategory();
			}
		},encodeFormData(obj));
	}
	//添加数据方法调用
	addOrUpdateBtn.onclick = function(){
		// saveOrUpdateCategory({id:2,name:'nzc',comment:'nzc',no:99});
		saveOrUpdateCategory({name:'nzc',comment:'nzc123',no:100});
	};


	/*
		删除单条数据
	*/
	function deleteCateGory(id){
		// console.log(id);
		myAjaxs('GET','/manager/category/deleteCategoryById?id='+id,function(res){
			// console.log(res);
			if(JSON.parse(res).status === 200){
				findAllCategory();
			}
		
		});
	}
	//事件代理
	tbody.onclick = function(event){
		// MouseEvent.mozPressure 已不推荐使用。请改用 PointerEvent.pressure。
		console.log(event);
		var target = event.target;
		// console.log(target.parentNode.parentNode.firstElementChild.nextElementSibling.innerText);
		var id = +target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
		if(target.nodeName === 'BUTTON'){
			deleteCateGory(id);
		}
		
	};

	/*
		批量删除
	*/
	function batchCategory(arr){
		myAjaxs('POST','/manager/category/batchDeleteCategory',function(res){
			// console.log(res);
			if(JSON.parse(res).status === 200){
				findAllCategory(1);
				// visiOrHidd('hidden','visible');

			}
			
		},encodeFormData({ids:arr.toString()}));
	}

	batchBtn.onclick = function(){
		//获取所有input标签的类数组对象
		var inputs = document.getElementsByTagName('input');
		//将获取到的input框装换为数组
		inputs = Array.prototype.slice.call(inputs,0);
		//过滤出checked === true的复选框
		var result = inputs.filter(function(item){
			return item.checked === true;
		});
		//由于存储勾选的复选框相对应的数据id值
		var array = [];
		result.forEach(function(item){
			array.push(+item.parentNode.nextElementSibling.innerText);
			// console.log(+item.parentNode.nextElementSibling.innerText)
		});
		// console.log(arr);
		batchCategory(array);
		// visiOrHidd('hidden','visible');
		// console.log('111111111111');

	}



	/*
		将js的对象转换成表单格式数据
	*/
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

};


