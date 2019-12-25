import React from 'react';
class Live extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      msg:'hello'
    };
  }
  //组件将要挂载到页面上
  componentWillMount(){
  // static getDerivedStateFromProps(){
    
    console.log(this.state);
  }
  //组件挂载完毕   AJAX操作
  componentDidMount(){
    // console.log('111111111');
    setTimeout(()=>{
      this.setState({
        msg:'world'
      },()=>{
        console.log(this.state.msg,'+++++++');
      });
    },2000);
    console.log(this.state.msg,'--------');
  }
  //是否允许组件数据更新
  shouldComponentUpdate(){
    //如果返回false,不更新
    return true;
    // return false;
  }
  //组件将要更新
  componentWillUpdate(){
  // getSnapshotBeforeUpdate(){
    alert(1);
  }
  //组件传递过来的props发生改变时将要接受props参数
  componentWillReceiveProps(){
    
  }
  //组件更新完毕
  componentDidUpdate(){
    alert(2);
  }
  //组件将要被卸载
  componentWillUnmount(){
    console.log('组件将要被卸载');
  }
  render(){
    console.log('render-------');
    return (
      <div>
        <h3>{this.state.msg}</h3>
      </div>
    );
  };
}

export default Live;