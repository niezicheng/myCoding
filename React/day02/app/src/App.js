import React from 'react';
// import logo from './logo.svg';
import './App.css';
//导入MyTable组件
import MyTable from './components/MyTable';
// //导入MyState组件
import MyState from './components/MyState-3';
import MyStatee from './components/MyState-4';
import Live from './components/Live-5';
import MyEvent from './components/myEvent-6';
import MyEventt from './components/myEvent-7';
import MyTest from './components/MyTest';

function App() {
  let stus = [
    {
      name:'zhangsan',
      age:18,
      gender:'男'
    },
    {
      name:'zhangsan',
      age:18,
      gender:'男'
    },
    {
      name:'zhangsan',
      age:18,
      gender:'男'
    },
    {
      name:'zhangsan',
      age:18,
      gender:'男'
    }
  ];
  return (
    <div>
      {/* <MyTable stus={stus} /> */}
      {/* <MyState msg='propsMsg' /> */}
      {/* <MyStatee /> */}
      {/* <Live /> */}
      {/* <MyEvent /> */}
      {/* <MyEventt /> */}
      <MyTest />
    </div>
    
  );
}

export default App;
