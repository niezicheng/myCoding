/*function foo({x, y = 5}) { 
console.log(x, y); 
}
foo({}) // undefined 5 
foo({x: 1}) // 1 5 
foo({x: 1, y: 2}) // 1 2

function add({a=2,b}){
		//形参 {a=2,b} = {b:5}
		console.log(a,b);
	}
add({a:undefined,b:5});*/

/*{
	function test({a,...rest}){
		console.log(a,rest);
	}
	test({a:1,b:2,c:3,d:4});
	console.log([...[1,2,3,4]]);

	console.log([...'hello']);

	console.log(Math.max(...[2,4,7,13,1]));

	let arrList = {'0':"hello",'1':"world","length":2};
	console.log(Array.from(arrList))
	console.log(arrList);

	let arr = [1,2,3,4,5];
	//console.log(arr.slice(1,3));
	console.log(arr.values());
	for(key of arr.values()){
		console.log(key);
	}
}*/


/*console.log(...[1,2,3,4])
console.log([...'hello']);*/

{
	let arr = [1,2,3,4,5,6];
	console.log(arr.splice(3));
}