import React,{Component} from 'react';
import style from './TestCss.css';
console.log(style);

class TestCss extends Component{
  render(){
    return (
      <div>
        <span className={style.one}>hello</span>
        <span id={style.two}>world</span>
      </div>
    );
  }
}

export default TestCss;