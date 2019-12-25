import React from 'react';
import './App.css';
import MyRefs from './components/MyRefs';
import PC from './components/2-PC.js';
import Style from './components/3-Style';
import MyForm from './components/4-MyForm';
import MyFormm from './components/5-MyForm';
import Test from './components/Test';

// console.log(MyRefs);  //构造该组件函数
// console.log(MyRefs.state); //undefined  无法获取子组件中的state
class App extends React.Component{
  componentDidMount(){
    console.log(this.refs); //获取该组件渲染函数中的带ref属性的组件或dom元素组成的对象{ref属性值:组件|dom元素}
    console.log(this.refs.myrefs); //通过refs对象获取ref属性值为myrefs的组件或dom元素
    console.log(MyRefs); //构造该组件函数【里面不存在数据,只有组件类类中的一些方法】
    console.log(this.refs.myrefs === MyRefs); //false
    console.log(this.refs.myrefs.state); //可以获取到相应组件中的state对象
  //   //改变子组件中state数据中的msg值
  //   this.refs.myrefs.setState({msg:'hello'},()=>{
  //     console.log(this.refs.myrefs.state.msg);   //hello
  //   });
  }
  render(){
    return (
      <div>
        {/* <Style /> */}
        <hr/>
        <MyRefs ref="myrefs"></MyRefs>
        <hr/>
        {/* <PC></PC> */}
        {/* <MyForm /> */}
        {/* <MyFormm /> */}
        {/* <Test /> */}
      </div>
      
    );
  };
}

export default App;
