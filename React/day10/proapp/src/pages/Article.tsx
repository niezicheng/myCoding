import React, { Component } from 'react';
import { connect } from 'dva';
import { Table,Button } from 'antd';

class Article extends Component {
  componentDidMount(){
    //发送异步，获取数据
    // console.log(this.props.dispatch,'+++++');
    this.props.dispatch({
      type:'article/getArticleData',
      payload:{page:0,pageSize:10},
    })
  }
  //删除
  deleteDataById = (id)=>{
    // console.log(1);
    this.props.dispatch({
      type:'article/deleteArticleData',
      payload:{id},
    });
  }
  render() {
    const { articleData } = this.props.article;

    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '所属栏目',
        dataIndex: 'category.name',
      },
      {
        title: '排列方式',
        dataIndex: 'liststyle',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '发布时间',
        dataIndex: 'publishtime',
      },
      {
        title: '阅读次数',
        dataIndex: 'readtimes',
      },
      {
        title: '操作',
        dataIndex: '',
        render:(text,record)=>{
          // console.log(record,'++++++++++++++++++++++');
          return (
            <div>
              <Button size="small" type='primary'>修改</Button>
              <Button size="small" type='danger' onClick={this.deleteDataById.bind(this,record.id)}>删除</Button>
            </div>
          );
          
        },
      },
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <div>
        {/* {JSON.stringify(this.props.article)} */}
        <Table size='small' rowSelection={rowSelection} columns={columns} dataSource={articleData} />
      </div>
    );
  }
}

export default connect(state=>state)(Article);