const {JSDOM} = require('jsdom');
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);

// console.log($.ajax);
let p = new Promise(function(resolve,reject){
	// console.log('--------------');
	$.ajax({
		url:'http://134.175.154.93:8099/manager/category/findAllCategory',
		method:'get',
		success(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});

// console.log(p);

p.then(function(res){
	console.log(res);
});

p.catch(function(error){
	console.log(error);
});