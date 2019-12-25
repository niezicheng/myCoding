import React,{Component} from 'react';
import './TestSass.scss';

class TestSass extends Component{
  render(){
    return (
      <div className='TestSass'>
        <span>hello</span>
        <p className="one">我是p标签</p>
        <span>world</span>
      </div>
    );
  }
}

export default TestSass;