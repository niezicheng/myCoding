var obj = {
	id:1001,
	name:'zhangsan',
	age:21,
	gender:'男',
	hibby:null,
	address:''
};
console.log(obj);
//删除对象中的属性
//delete obj.address;
//console.log(obj);
for(var k in obj){
//删除其中属性值为假性值
	if(!obj[k]){
		delete obj[k];
	}	
}
console.log(obj);




