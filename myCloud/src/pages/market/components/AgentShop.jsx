import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

export class AgentShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        page:0,
        pageSize:10,
        agentId:this.props.record.id,
      }
    }
  }
  
  // 组件已挂载事件
  componentDidMount(){

    this.props.dispatch({
      type:'businessManage/fetchLoadBusinessManage',
      payload:this.state.form
    });
  }


  //数据页面跳转
  changePage = (page,pageSize)=>{

  }
  render() {
    const { businessManageData } = this.props.businessManage;
    const { total } = this.props.businessManage;

    const columns = [
      {
        title: '商家id',
        dataIndex: 'id',
        align:'center',
      },
      {
        title: '手机号',
        dataIndex: 'telephone',
        align:'center',
      },
      {
        title: 'QQ',
        dataIndex: 'qq',
        align:'center',
      },
      {
        title: '累计放单',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '已完成订单',
        dataIndex: 'hhhhh',
        align:'center',
      },
      {
        title: '注册时间',
        dataIndex: 'registerTime',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.businessManage)} */}
        <div style={{ color:'black',marginBottom:20 }}>推广商家</div>
        <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={businessManageData} 
          pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:this.state.pageSize,
            onChange:this.changePage
          }}
          />
      </div>
    );
  }
}

export default connect(state=>state)(AgentShop);
