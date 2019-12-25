'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.say = say;
//直接导出单个变量或单个函数
var x = exports.x = 10;
function say() {
	console.log('say');
};

//模块中自定义的变量及方法
var m = 1;
var n = 2;
var test = function test() {
	console.log('test');
};

//可以使用对象解构导出多个变量或使用表达式声明的方法
exports.m = m;
exports.n = n;
exports.test = test;
//导出变量m在导入模块中使用temp变量接受

exports.temp = x;

var y = 20;
exports.default = y;