import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import BusDetails from './components/BusDetails';
import WaitReOrder from './components/WaitReOrder';
import UseOrder from './components/UseOrder';
import FinishOrder from './components/FinishOrder';
import CancelOrder from './components/CancelOrder';
import BindStore from './components/BindStore';
import RecordChange from './components/RecordChange';
import CapitalLogs from './components/CapitalLogs';

const { TabPane } = Tabs;

export class BusinessDetails extends Component {

//组件挂载关闭函数
componentDidMount(){
  // console.log(this.props.match.params);
  console.log(this.props.businessManage.record);
}
  
callback = (key)=>{
  // console.log(key);
}
  render() {
    let { record } = this.props.businessManage
    return (
      <div style={{ margin:10,padding:'5px 15px',minHeight:500,backgroundColor:'white' }}>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="商家详情" key="1">
            <BusDetails record={ record } />
          </TabPane>
          <TabPane tab="待接订单" key="2">
            <WaitReOrder record={ record } />
          </TabPane>
          <TabPane tab="进行中订单" key="3">
            <UseOrder record={ record } />
          </TabPane>
          <TabPane tab="已完成订单" key="4">
            <FinishOrder record={ record } />
          </TabPane>
          <TabPane tab="已撤销订单" key="5">
            <CancelOrder record={ record } />
          </TabPane>
          <TabPane tab="绑定店铺" key="6">
            <BindStore record={ record } />
          </TabPane>
          <TabPane tab="充值记录" key="7">
            <RecordChange record={ record } />
          </TabPane>
          <TabPane tab="资金日志" key="8">
            <CapitalLogs record={ record } />          
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(state=>state)(BusinessDetails);
