import React from 'react';
import MyInfo from './MyInfo';
import style from '../css/MyStyle.css';
console.log(style);

export default class MyStyle extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      personInfo:'个人信息'
    };
  }

  render(){
    return (
      <div className="information">
        <h3 className={style.title}>{this.state.personInfo}</h3>
        <MyInfo />
      </div>
    );
  }
  
}