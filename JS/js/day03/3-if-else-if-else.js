//判断一个成绩属于什么级别
var grade = 76;
var result;
//grade = +grade;
//console.log(grade);
//要求输出 不及格60以下，中60~70， 良70~90，优90以上
if(grade && ((typeof grade) == 'number')){
	if(grade>=0 && grade <=100){
		//判断
		if(grade>90){
			result = '成绩为优';
		}else if(grade>70){
			result = '成绩为良';
		}else if(grade>60){
			result = '成绩为中';
		}else{
			result = '成绩为不及格';
		}
	}else{
		result = '请输入0~100之间的数';
	}
}else{
	result = '请输入正确分数数值类型';
}

console.log(result);





