import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import AgentDetails from './components/AgentDetails';
import AccountInfo from './components/AccountInfo';
import AgentShop from './components/AgentShop';
import CapitalLogs from './components/CapitalLogs';

const { TabPane } = Tabs;

export class MarketDetails extends Component {

//组件挂载关闭函数
componentDidMount(){
  // console.log(this.props.match.params);
  console.log(this.props.market.record);
}
  
callback = (key)=>{
  // console.log(key);
}
  render() {
    let { record } = this.props.market
    return (
      <div style={{ margin:10,padding:'5px 15px',minHeight:500,backgroundColor:'white' }}>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="推广员详情" key="1">
            <AgentDetails record={ record } />
          </TabPane>
          <TabPane tab="账户信息" key="2">
            <AccountInfo record={ record } />
          </TabPane>
          <TabPane tab="推广商家" key="3">
            <AgentShop record={ record } />
          </TabPane>
          <TabPane tab="资金日志" key="4">
            <CapitalLogs record={ record } />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(state=>state)(MarketDetails);
