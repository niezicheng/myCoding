// //index.js
// $(function(){
//   $('.content-box').load('./page/stuPractice.html');
//   //获取导航栏中li元素
//   $('.header .header-btm li').on('click','a',function(e){
//     var text =  $(e.target).text().trim();
//     // console.log(text);
//     switch(text){
//       case '首页':
//         $('.content-box').load('./page/stuPractice.html');
//         break;
//       case '大数据技术栈':
//         $('.content-box').load('./page/stuPractice.html');
//         break;
//       case '课堂练习':
//         $('.content-box').load('./page/stuPractice.html');
//         break;
//       case '项目演练':
//         $('.content-box').load('./page/teacPractice.html');
//         break;
//       case '资源展示':
//         $('.content-box').load('./page/stuPractice.html');
//         break;
//       default:
//         break;
//     }
//   })
// });

$(function(){
  $('.table-content tbody').on('click','td .update-btn',function(){
    console.log(1111);
    //显示模态框
    $('#myModal').modal('show');
  })

  //点击学生练习中的单个项目跳转到老师管理练习页面
  $('.stu-practice tbody').on('click','tr>td:first-child',function(e){
  	// window.open('../pages/teacPractice.html');
  	location = '../pages/teacPractice.html';
	// location.href = '../pages/teacPractice.html'
	// location.assign('../pages/teacPractice.html');
  })




})