import React from 'react';
let n = 0;
class MyState extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      arr: [1,2,0],
      obj:{
        name:'zhangsan',
        age:18
      }
    };
  }
  componentWillMount(){
    //在原来的数组之上追加数据
    // this.state.arr.push(3);
    // this.state.obj.name = 'lisi';

    //取出obj对象中的所有可遍历属性
    console.log({...this.state.obj});
    
    this.state.arr.push(3);

    this.setState({
      // arr:[...this.state.arr,3],
      arr:this.state.arr.concat([3]),
      //不改变原对象的原来值
      // obj:Object.assign({},this.state.obj,{
      //   name:'lisi',
      //   age:21,
      //   gender:'男'
      // })
      obj:{...this.state.obj,name:'lisi',age:21,gender:'男'}
    },()=>{
      console.log('+++++++',this.state.arr,'++++++++'); //
    });
    console.log('----------',this.state.arr,"-------");

  }
  componentDidMount(){
    // console.log('====',this.state.arr.push(3),'======='); //4  返回添加数据后的数组长度
    // this.setState({
    //   // arr:[...this.state.arr,3],
    //   // arr:this.state.arr,
    //   arr:[1,1,1,1,1],
    //   //不改变原对象的原来值
    //   obj:Object.assign({},this.state.obj,{
    //     name:'lisi',
    //     age:21,
    //     gender:'男'
    //   })
    // },()=>{
    //   console.log('+++++++',this.state.arr,'++++++++');
    // });
    // console.log('----------',this.state.arr,"-------");


  }
  
  render(){
    n++;
    console.log('render---',n);
    return (
      <div>
        <h3>{this.state.arr.toString()}------{JSON.stringify(this.state.obj)}</h3>
      </div>
    );
  }
}

export default MyState;

