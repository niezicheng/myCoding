import React,{Component} from 'react';
import Index from './MyTabChild/1-Index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';

// let CurrentCom = Index;
class MyTab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      CurrentCom:Index
    };
  }
  // CurrentCom = Index;
  //点击切换页面
  changeTab = (component)=>{
    // CurrentCom = component;
    this.setState({
      CurrentCom:component,
      msg:'msg'
    })
  }
  render(){
    let {CurrentCom} = this.state;
    // console.log(CurrentCom)
    return (
      <div>
        <nav>
          <button onClick={this.changeTab.bind(this,Index)}>首页</button>
          <button onClick={this.changeTab.bind(this,Student)}>学生管理</button>
          <button onClick={this.changeTab.bind(this,Course)}>课程管理</button>
          <button onClick={this.changeTab.bind(this,Room)}>教室管理</button>
        </nav>
        <div>
          <CurrentCom></CurrentCom>
          {/* <this.state.CurrentCom /> */}
        </div>
      </div>
      
    );
  }
}

export default MyTab;