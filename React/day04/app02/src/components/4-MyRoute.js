import React,{Component} from 'react';
import {BrowserRouter,HashRouter,NavLink,Switch,Route,Redirect} from 'react-router-dom'
import Index from './MyTabChild/1-Index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';
import './MyRoute.scss';

class MyRoute extends Component{
  render() {
    return (
       <HashRouter>
        <nav>
          {/* exact完全匹配路径 */}
          <NavLink exact activeClassName="navActive" to='/'>首页</NavLink>
          <NavLink activeClassName="navActive" to='/student'>学生管理</NavLink>
          <NavLink activeClassName="navActive" to='/course'>课程管理</NavLink>
          <NavLink activeClassName="navActive" to='/room'>教室管理</NavLink>
          <NavLink activeClassName="navActive" to='/teacher'>教师管理</NavLink>
        </nav>
        <div>
          {/* 展示的组件 */}
          <Switch>
            {/* <Redirect exact from="/" to="/student"></Redirect> */}
            {/* exact完全匹配路径 */}
            <Route  exact path="/" component={Index}></Route>
            <Route path="/student" component={Student}></Route>
            <Route path="/course" component={Course}></Route>
            <Route path="/room" component={Room}></Route>
            <Route path="/teacher" component={()=>{return <div>teacher</div>}}></Route>
            {/* <Route path="/teacher" render={()=>{return <div>teacher</div>}}></Route> */}
            {/* <Route path="/" component={Index}>首页</Route> */}
          </Switch>
        </div>
       </HashRouter>
    );
  }
} 

export default MyRoute;