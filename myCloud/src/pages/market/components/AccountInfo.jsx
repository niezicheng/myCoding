import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

export class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        siteId:2,
        page:0,
        pageSize:10,
        agentId:this.props.record.id,
      }
    }
  }
  
  // 组件已挂载事件
  componentDidMount(){

    this.props.dispatch({
      type:'account/fetchLoadAccount',
      payload:this.state.form
    });
  }


  //数据页面跳转
  changePage = (page,pageSize)=>{

  }
  render() {
    const { accountData } = this.props.account;
    const { total } = this.props.account;

    const columns = [
      {
        title: '订单分成比例',
        dataIndex: 'accountId',
        align:'center',
      },
      {
        title: '账户余额',
        dataIndex: 'taskId',
        align:'center',
      },
      {
        title: '推广商家数',
        dataIndex: 'businesId',
        align:'center',
      },
      {
        title: '累计分成金额',
        dataIndex: 'taskTypeId',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.account)} */}
        <div style={{ color:'black',marginBottom:20 }}>账户信息</div>
        <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={accountData} 
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

export default connect(state=>state)(AccountInfo);
