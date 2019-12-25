const {JSDOM} = require('jsdom');
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);


// console.log($.ajax);
let p = new Promise((resolve,reject)=>{
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

//传递的是Promise对象，不做任何操作，原样返回Promise对象【但是是另一个Promise对象】
/*let p1 = Promise.resolve(p);

p1.then((res)=>{
	console.log(res);
}).catch((error)=>{
	console.log(error,'-------');
}).finally(()=>{
	//无论异步操作成功或失败都会执行finally函数
	console.log('finally');
});*/

//如果参数为(非thenable对象)【内部没有then方法的对象】，返回resolve状态的Promise对象
//既然返回的是resolve状态的Promise对象，在执行了resolve函数，Promise对象才由pending状态转化为resolve状态
/*let p2 = Promise.resolve('hello');  //返回resolve状态的Promise对象【内部执行了resolve函数】 打印resolve字符串
p2.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
});*/

//参数为thenable对象
/*let obj = {
	name:'zhangsan',
	then(){
		console.log('obj中的then方法');
	}
};

let p3 = Promise.resolve(obj);	//直接执行obj对象中的then方法,不会执行p3的then方法
p3.then(()=>{		//该方法不会执行
	console.log('p3的then方法');  
});*/

//参数为空
/*let p4 = Promise.resolve();	//返回resolve状态的Promise对象
p4.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
});
*/


let p5 = Promise.reject('hello');  //返回reject状态的Promise对象
p5.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
});
