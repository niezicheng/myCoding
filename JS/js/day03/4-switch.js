//分支语句  switch开关语句

var num = 3;

switch(num){
	case 1:
		result = '星期一';
		break;
	case 2:
		result = '星期二';
		break;
	case 3:
		result = '星期三';
		break;
	case 4:
		result = '星期四';
		break;
	case 5:
		result = '星期五';
		break;
	case 6:
		result = '星期六';
		break;
	case 7:
		result = '星期日';
		break;
	default:
		result = '输入数值应在1~7之间';
		break;
}
console.log('今天是：'+result);





