import React,{Component} from 'react';
//引入外部样式
import obj from './3-Style.css';
console.log(obj);
class Style extends Component{
  render(){
    let btnStyle = {
      backgroundColor:'teal',
      width:100,
      border:'none',
      fontSize:30,
      color:'white',
      borderRadius:5
    };
    return (
      <div className="Style">
        <span style={{color:'red',fontSize:40,display:'block'}}>hello</span>
        <button style={btnStyle}>按钮</button>
        <h3 className='title'>world</h3>
      </div>
    );
  }
}
export default Style;