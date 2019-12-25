const {JSDOM} = require('jsdom');
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);


// console.log($.ajax);
let p1 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/category/findAllCategory',
		method:'GET',
		success(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});


let p2 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/article/findArticle?page=0&pageSize=10',
		method:'GET',
		success(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});

let p3 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/user/findAllUser',
		method:'GET',
		success(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});

//如果p1,p2,p3都成功做什么事情,其他做什么事情
// let p = Promise.all([p1,p2,p3]);

//谁响应快则返回谁的结果状态数据，无论他结果是什么将直接决定p的状态
let p = Promise.race([p1,p2,p3]);	

p.then((res)=>{
	console.log(res);
}).catch((error)=>{
	console.log(error)
});