//1、分别使用while/do-while/for循环实现10的阶乘（使用递归算法）。
//使用while方法解答
/*var num = 10
var sum = 1;
var str = '';
var i = 10;
while(i>=1){
	sum *= i;
	if(i == 1){
		str += i;
	}else{
		str += i+'*';
	}
	i--;
}
console.log(num+'! = '+str+' = '+sum);*/

//使用do-while方法解答
/*var num = 10
var sum = 1;
var str = '';
var i = 10;
do{
	sum *= i;
	if(i == 1){
		str += i;
	}else{
		str += i+'*';
	}
	i--;
}while(i>=1)
console.log(num+'! = '+str+' = '+sum);*/

//使用for循环方法解答
/*var num = 10
var sum = 1;
var str = '';
for(var i=10;i>=1;i--){
	sum *= i;
	if(i == 1){
		str += i;
	}else{
		str += i+'*';
	}
}
console.log(num+'! = '+str+' = '+sum);*/

//使用递归函数方法
/*var num = 10;
var result = factorial(num);
console.log(result);

function factorial(n){
	if(n == 1){
		return 1;
	}else{
		return n*factorial(n-1);
	}

}*/


//2、打印九九乘法表（四种形式）
/*for(var i=1;i<=9;i++){
	var str = '';
	for(var j=1;j<=i;j++){
		str += i+'*'+j+'='+i*j+'\t';
	}
	console.log(str);
}*/


//3、有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
/*var n =4;
var str = '';
for(var i=1;i<=n;i++){	
	for(var j=1;j<=n;j++){
		if(j != i){
			for(var k=1;k<=n;k++){
				if(k != i && k != j){
					str = str+i+j+k+'\t';
				}
			}
		}
	}
}
console.log(str);*/


//4、判断101-200之间有多少个素数，并输出所有素数（只能被1和它本身整除的自然数为素数）
// console.log(Math.sqrt(101));

/*var str = '';
var count = 0;
for(var i=101;i<=200;i++){
	var flag = true;
	for(var j=2;j<=Math.sqrt(i);j++){
		if(i%j == 0){
			//不是质数
			var flag = false;
			break;  //节省运算时间，后面循环不需要再执行了
		}
		
	}
	if(flag){
		str += i+'\t';
		count++;
	}
}
console.log('101~200之间有'+count+'个素数\n分别为:\n'+str);*/


// 5、打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方＋5的三次方＋3的三次方
// console.log(Math.pow(10,3)); 

/*for(var i=100;i<1000;i++){
	var hundred = parseInt(i/100);
	var ten = parseInt((i-hundred*100)/10);
	var unit = i-hundred*100-ten*10;
	// console.log('................');
	var sum = Math.pow(hundred,3)+Math.pow(ten,3)+Math.pow(unit,3);
	if(sum == i){
		console.log(i);
	} 
}*/



//6、将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5。 
/*var num = 90;
var str = '';
for(var i=2;i<=num;i++){
	// console.log(i);
	if(num == i){
		str += i;
	}
	while(num != i){
		if(isPrime(i)){
			// console.log(i);
			if (num%i == 0) {
				num /= i;
				str += i+'*';
			}else{
				break;
			}
		}else{
			break;
		}
	}	
}
console.log(str);*/

//判断一个数是否为素数
/*// console.log(isPrime(4)); 测试isPrime()函数
function isPrime(n){
	var flag = true;
	for(var i=2;i<=Math.sqrt(n);i++){
		if(n%i == 0){
			flag = false;
		}
	}
	return flag;
}*/



//7、求任意两个正整数的最大公约数和(GCD)和最小公倍数(LCM)
/*
	辗转相除法的算法为：首先将 m除以 n（m>n）得余数 r，再用余数  r 去除原来的除数，
	得新的余数，重复此过程直到余数为 0时停止，此时的除数就是m 和 n的最大公约数。 
	求 m和 n的最小公倍数: m和 n的积除以(m和 n 的最大公约数)。
*/
/*function gcdLcm(m,n){
	var mn = m*n;
	var r = m%n;
	while(r != 0){
		r = m%n;
		m = n;
		n = r;
	}
	console.log('最大公约数为:'+m+'\t最小公倍数为:'+mn/m);
}
gcdLcm(100,40);*/



//8、求1000以内的完全数（若一个自然数，恰好与除去它本身以外的一切因数的和相等，这种数叫做完全数。）
/*// var sum = 0;
for(var i=1;i<=1000;i++){
	// console.log(i);
	// var i = 6;
	var sum = 0;
	for(var j=1;j<=i;j++){
		// console.log('111111111111111')
		if(i%j == 0 && i!=j){
			// console.log('2222222222222')
			sum += j;
			// console.log(sum);
		}
	}
	if(sum == i){
		console.log(i);
	}
}*/

console.log(typeof a);
console.log(typeof name);
console.log(typeof true);

/*for(var i=1;i<=9;i++){
			for(var j=1;j<=i;j++){
				document.write(i+"x"+j+"="+j*i+" ")
			}
			document.write("<br>")
		}

for(var i=9;i>=1;i--){
			for(var j=1;j<=i;j++){
				document.write(i+"x"+j+"="+j*i+" ")
			}
			document.write("<br>")
}*/
