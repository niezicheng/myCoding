import React,{Component} from 'react';
class Test extends Component{
  constructor(props) {
    super(props);
    // 说明：
    //state中值的修改
    //1、修改赋值过程中尽量不要需要state中原属性的值【赋值一份在进行赋值】
    //2、不要使用this.state.name修改name的值【该方法修改state的值不会渲染更新到页面上】
    //3.使用setState({},()=>{})修改state中的值【该方法执行异步的,第二个参数为数据更新后的回调函数】
    //4、由React引发的事件处理中调用setState()方法更新是异步的【调用某个函数修改了是否执行异步更新的控制变量为true】,其余调用会同步执行
    //5、在一个函数中多次调用setState()方法会产生合并效果
    this.state = {
      msg:'msg'
    };
  }
  changeMsg = ()=>{
    this.setState({
      msg:'world'
    });
    console.log(this.state.msg)
  };
  
  UNSAFE_componentWillMount(){
    // this.setState({
    //   msg:'hello react'
    // });
  }
  componentDidMount(){
    this.setState({
      msg:'hello react'
    });
  }

  shouldComponentUpdate(){
    // return false;  
    return true;  
  }
  UNSAFE_componentWillUpdate(){

  }
  componentDidUpdate(){

  }


  render(){
    // setTimeout(()=>{
    //   this.setState({
    //     msg:'hello'
    //   });
    //   console.log(this.state.msg)
    // },1000);
    console.log('render====');
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>click me</button>
      </div>
    );
  }
}
export default Test;