import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

export class BindStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        businesId:this.props.record.id,
      }
    }
  }
  
  // 组件已挂载事件
  componentDidMount(){

    this.props.dispatch({
      type:'store/fetchLoadStore',
      payload:this.state.form
    });
  }

  render() {
    const { storeData } = this.props.store;

    const columns = [
      {
        title: '所属平台',
        dataIndex: 'orderId',
        align:'center',
      },
      {
        title: '店铺名称',
        dataIndex: 'taskId',
        align:'center',
      },
      {
        title: '旺旺ID',
        dataIndex: 'businesId',
        align:'center',
      },
      {
        title: '店铺网址',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '绑定时间',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '店铺审核状态',
        dataIndex: 'address',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.order)} */}
        <div style={{ color:'black',marginBottom:20 }}>绑定店铺</div>
        <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={storeData} 
          />
      </div>
    );
  }
}

export default connect(state=>state)(BindStore);
