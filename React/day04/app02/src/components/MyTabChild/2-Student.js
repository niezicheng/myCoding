import React,{Component} from 'react';

class Student extends Component{

  //跳转路由并且传递数据
  toCourse = ()=>{
    this.props.history.push({
      pathname:'/course',
      test:'测试组件数据传递',
      obj:{
        name:'zhangsan',
        age:18
      }
    });
  }
  render(){
    return (
      <div>
        Student
        <button onClick={this.toCourse}>我是学生组件按钮，点击跳转到课程组件页面</button>
      </div>
    );
  }
}

export default Student;