import React from 'react'
class MyRefs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      msg:'msg'
    }
  }
 
  componentDidMount(){
    //保存该组件中的内的ref属性并且属性值为
    // console.log(this.refs);
    // console.log(this.refs.hello);
    // console.log(this.refs.world);
  }

  render(){
    return (
      <div>
        <h3 ref="hello">{this.state.msg}</h3>
        <h3 ref="world">world</h3>
      </div>
    );
  }
  
}

export default MyRefs;