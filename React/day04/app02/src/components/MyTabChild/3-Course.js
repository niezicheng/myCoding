import React,{Component} from 'react';

class Course extends Component{

  componentDidMount(){
    //结束其他组件传递的数据
    console.log(this.props.location);
  }
  render(){
    return (
      <div>
        Course
      </div>
    );
  }
}

export default Course;