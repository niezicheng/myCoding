import React from 'react';
import styles from './businessManage.less';
import { Button,DatePicker,Input,Select,Table } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

const { RangePicker } = DatePicker;
const { Option } = Select;

class BusinessManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        siteId:2,
        page:0,
        pageSize:6,
      }
    }
  }

  //页面挂载完毕周期函数
  componentDidMount(){
    //分发异步请求action获取数据信息
    // console.log(this.props.dispatch);
    this.props.dispatch({
      type:'businessManage/fetchLoadBusinessManage',
      payload:this.state.form,
    })
  }
  
  //日历选择框改变事件
  changeData = (date, dateString)=>{
    // console.log(date, dateString);
    if(dateString[0] && dateString[1]){
      let beginTime = new Date(dateString[0]).getTime();
      let endTime = new Date(dateString[1]).getTime();
      // console.log(beginTime,endTime,'===');
      this.setState({
        form:{
          ...this.state.form,
          beginTime,
          endTime,
        }
      })
    }else{
      //清除state的form中的开始和结束时间
      this.setState({
        form:{
          ...this.state.form,
          beginTime:'',
          endTime:'',
        }
      })
    }
  }

  //Select下拉框改变事件
  handleChange = (attrName,value)=>{
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:value,
      }
    })
  }

  //页面改变时事件
  changePage = (page,pageSize)=>{
    this.setState({
      form:{
        ...this.state.form,
        page:page-1,
        pageSize,
      }
    },()=>{
      this.props.dispatch({
        type:'businessManage/fetchLoadBusinessManage',
        payload:this.state.form,
      })
    })
  }

  //input输入框改变事件
  changeInput = (attrName,e)=>{
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:e.target.value,
      }
    })
  }

  //搜索按钮点击事件获取相应信息查询
  search = ()=>{
    this.props.dispatch({
      type:'businessManage/fetchLoadBusinessManage',
      payload:this.state.form,
    })
  }

  //点击表格商家id跳转到详细页面
  toBusinessDetails = (record)=>{
    this.props.dispatch({
      type:'businessManage/changeRecord',
      payload:record,
    })
    router.push('/businessDetails/'+record.id)
  }

  render(){
    const { form } = this.state;
    const { businessManageData } = this.props.businessManage;
    const { total } = this.props.businessManage;

    const columns = [
      {
        title: '商家ID',
        width: 70,
        align:'center',
        dataIndex: 'id',
        fixed: 'left',
        render:(text,record)=>{
          return (
            <a onClick={this.toBusinessDetails.bind(this,record)}>{text}</a>
          );
        }
      },
      { title: '手机号',align:'center', dataIndex: 'telephone' },
      { title: 'QQ号',align:'center', dataIndex: 'qq' },
      { title: '本金余额',align:'center', dataIndex: 'accountBj' },
      { title: '佣金余额',align:'center', dataIndex: 'accountYj' },
      { title: '累计充值',align:'center', dataIndex: 'allRechargeCount' },
      { title: '邀请ID',align:'center', dataIndex: 'businesSifuId' },
      { title: '注册时间',align:'center', dataIndex: 'registerTime' },
      { title: '用户等级',align:'center', dataIndex: 'rank' },
      { title: '状态',align:'center', dataIndex: 'status' },
      { title: '备注',align:'center', dataIndex: 'comment' },
      {
        title: '操作',
        align:'center',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ];
  
    return (
      <div className={styles.content}>
        {/* {JSON.stringify(businessManageData)} */}
        <div className={styles.content_title}>
          商户管理
        </div>
        <div className={styles.content_search}>
          <div className={styles.content_search_left}>
            <Button type='primary'>导出</Button>
          </div>
          <div className={styles.content_search_right}>
            <RangePicker onChange={this.changeData} style={{ marginRight:8 }} />
            <Input placeholder='商家ID' type="text" onChange={this.changeInput.bind(this,'id')} />
            <Input placeholder='手机号' type="text" onChange={this.changeInput.bind(this,'telephone')} />
            <Input placeholder='推广员ID' type="text" onChange={this.changeInput.bind(this,'agentId')} />
            <Select allowClear defaultValue="用户等级" style={{ width: 110,marginRight: 5 }} onChange={this.handleChange.bind(this,'rank')}>
              <Option value="jack">新手用户</Option>
              <Option value="lucy">普通用户</Option>
              <Option value="Yiminghe">高级用户</Option>
            </Select>
            <Select allowClear defaultValue="状态" style={{ width: 110,marginRight: 5 }} onChange={this.handleChange.bind(this,'status')}>
              <Option value="jack">正常</Option>
              <Option value="lucy">停用</Option>
            </Select>
            <Select allowClear defaultValue="所属分站" style={{ width: 120,marginRight: 5 }} onChange={this.handleChange.bind(this,'siteId')}>
              <Option value="1">赚多多</Option>
              <Option value="2">发大财</Option>
            </Select>
            <Button type='primary' style={{ marginTop:10 }} onClick={this.search}>搜索</Button>
          </div>
        </div>
        <div className={styles.content_content}>
          <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={businessManageData} 
          scroll={{ x: 1300 }}
          pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:form.pageSize,
            onChange:this.changePage,
          }}
          />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(BusinessManage);