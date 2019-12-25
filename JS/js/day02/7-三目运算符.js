var result = 5>3?2:0;
console.log(result); //2

var result;
if(5>3){
	result = 2;
}else{
	result = 0;
}
console.log(result);//2

var a = 'hello';
a?console.log('true'):console.log('false'); //true

a?test():add(); //test
var handle = !a?test:add;
handle(); //add
function test(){
	console.log('test123');
}
function add(){
	console.log('add123');
}



