import React, { Component } from 'react';
import { Button, Table } from 'antd';
import axios from '../utils/axios';
import config from '../utils/config';
import MyModal from '../pages/addOrUpdModal';

// 将js数据转成表单个数的数据
class ArticleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      currentPage: 1,
      pagination: {
        pageSize: config.pageSize,
        total: 0
      },
      // 批量删除的id的数组
      selectedRowKeys: [],
      //显示与隐藏modal
      visible: false,
    };
  }
  componentDidMount() {
    this.findArticleByPage();
  }
  // 获取数据
  findArticleByPage = () => {
    axios.get('/manager/article/findArticle', { params: { page: this.state.currentPage - 1, pageSize: this.state.pagination.pageSize } }).then((res) => {
      // res是axios封装过后的数据 data属性上才是后台服务器给出的数据
      // console.log(res.data);
      // console.log(res);
      this.setState({
        tableData: res.data.list,
        pagination: {
          ...this.state.pagination,
          total: res.data.total
        }
      });
    }).catch((err) => {
      console.log(err);
    });

    /* $.ajax({
      ...
      success(res){
        let obj = {
          data:res,
          status:,
          test:'rrr'
        };
        resolve(obj)
      }
    }) */
  }
  //页数更改事件处理程序
  pageChange = (pagination) => {
    // console.log(pagination.current);
    // 修改数据模型中的数据为当前页数
    this.setState({
      currentPage: pagination.current
    }, () => {
      this.findArticleByPage();
    })
  }
  // 批量删除
  toBatchDelete = () => {
    // 发送ids给后台
    axios.post('/manager/article/batchDeleteArticle', { ids: this.state.selectedRowKeys.toString() }).then(() => {
      //清空selectedRowKeys数组中的值
      this.setState({
        selectedRowKeys:[],
      });
      // 添加提示，提示用户删除成功
      this.findArticleByPage();
    }).catch((err) => {
      console.log(err);
    });
  }

  //弹出modal
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  // 新增  模态框显示，如果点了模态框的确定的时候，获取state的数据提交给后台
  toAdd = () => {
    let obj = {
      title: 'liuy',
      liststyle: 'style-one',
      categoryId: 7868,
      content: '123123213'
    };
    console.log(this.refs.mymodal.state);
    // 保存
    axios.post('/manager/article/saveOrUpdateArticle', obj).then(() => {
      this.findArticleByPage();
    }).catch((err) => {
      console.log(err);
    });
  }
  // 单个删除
  toDelete = (id) => {
    // id就是要删除的数据
    axios.get('/manager/article/deleteArticleById', { params: { id } }).then(() => {
      this.findArticleByPage();
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    let {selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(selectedRowKeys, selectedRows);
        // selectedRowKeys就是要删除的元素的id组成的数组
        this.setState({
          selectedRowKeys,
        });
      }
    };
    const columns = [{
      title: '文章标题',
      dataIndex: 'title'
    }, {
      title: '所属栏目',
      dataIndex: 'category.name'
    }, {
      title: '排列方式',
      dataIndex: 'liststyle'
    }, {
      title: '发布时间',
      dataIndex: 'publishtime'
    }, {
      title: '阅读次数',
      dataIndex: 'readtimes'
    }, {
      title: '操作',
      dataIndex: '',
      render: (text, record) => {
        // text属性值  
        //record一行记录，对象
        return (
          <div>
            <Button type="primary">编辑</Button>
            <Button type="danger" onClick={this.toDelete.bind(this, record.id)}>删除</Button>
          </div>
        );
      }
    }];
    return (
      <div className="article-manage">
        <div className="btns-div">
          <Button type="primary" onClick={this.showModal}>新增</Button>
          <Button type="danger" onClick={this.toBatchDelete}>批量删除</Button>
        </div>
        <div className="table-div">
          <Table rowKey="id" rowSelection={rowSelection} dataSource={this.state.tableData} columns={columns} pagination={this.state.pagination} onChange={this.pageChange}></Table>
        </div>
        <MyModal ref='mymodal' visible={this.state.visible} handleOk={this.handleOk} handleCancel={this.handleCancel}></MyModal>
      </div>
    );
  }
}

export default ArticleManage;