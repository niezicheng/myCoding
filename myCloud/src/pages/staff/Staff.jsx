import React from 'react';
import styles from './staff.less';
import { Input,Select,Button,Table,Icon } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import { reloadAuthorized } from '@/utils/Authorized';

const { Option } = Select;

class Staff extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form:{
          page:0,
          pageSize:6
        }
      }
    }
    
   //组件挂载完成后
   componentDidMount(){
    //  console.log(this.props.dispatch,'=======');
    // let that = this;
     this.props.dispatch({
       type:'staff/fetchLoadStaff',
       payload:this.state.form,
     });
   }

   //跳转到用户日志页面
   toLogs = (record)=>{
      router.push('/logDetails/'+record.id);
   }

   //点击改变状态的时候事件
   changeStatus = (record)=>{
      console.log(!record.enabled,'-------')
      this.props.dispatch({
        type:'staff/fetchChangeStatus',
        payload:{
          page:this.state.form,
          forms:{
            id:record.id,
            enabled:!record.enabled,
          }
        },
      });
   }

   //输入框改变获取查询
   changeInput = (attrName,e)=>{
      // console.log(e.target.value);
      this.setState({
        form:{
          ...this.state.form,
          [attrName]:e.target.value,
        }
      })
   }
   
   //下拉框值改变事件
   handleChange = (attrName,value)=>{
    //  console.log(attrName,value);
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:value,
      }
    })
  }

  //根据条件搜索用户信息按钮事件
  search = ()=>{
    this.props.dispatch({
      type:'staff/fetchLoadStaff',
      payload:this.state.form,
    });
   }

  //页面改变的时候
  changePage = (page,pageSize)=>{
    // console.log(page,pageSize,'-------');
    this.props.dispatch({
      type:'staff/fetchLoadStaff',
      payload:{
        page:page-1,
        pageSize
      },
    });

    this.setState({
      form:{
        ...this.state.form,
        page:page-1,
      }
    })
  }

  render(){
    const { staffData } = this.props.staff;
    const { total } = this.props.staff;

    const columns = [
      {
        title: '员工ID',
        dataIndex: 'id',
        align:'center',
        render: text => <a>{text}</a>,
      },
      {
        title: '所属分站',
        dataIndex: 'siteVM.name',
        align:'center',
      },
      {
        title: '用户名',
        dataIndex: 'username',
        align:'center',
      },
      {
        title: '真实姓名',
        dataIndex: 'realname',
        align:'center',
      },
      {
        title: '手机号',
        dataIndex: 'telephone',
        align:'center',
      },
      {
        title: 'QQ号',
        dataIndex: 'qq',
        align:'center',
      },
      {
        title: '上次登录时间',
        dataIndex: 'lastLoginTime',
        align:'center',
      },
      {
        title: '上次登录IP',
        dataIndex: 'lastLoginIp',
        align:'center',
      },
      {
        title: '状态',
        dataIndex: 'enabled',
        align:'center',
        render:(text,record)=>{
          if(record.enabled){
            return (
              <div>正常</div>
            )
          }else{
            return (
              <div>停用</div>
            )
          }
        }
      },
      {
        title: '操作',
        dataIndex: '',
        align:'center',
        render: (text,record)=>{
          if(record.enabled){
            return (
              <div>
                <Icon type='stop' title='禁用' onClick={this.changeStatus.bind(this,record)} style={{ color:'red',cursor:'pointer' }}></Icon>
                <Icon type='file-text' title='查看日志' onClick={this.toLogs.bind(this,record)} style={{ marginLeft:5,cursor:'pointer' }}></Icon>
              </div>
            );
          }else{
            return (
              <div>
                <Icon type='check-circle' title='启用' onClick={this.changeStatus.bind(this,record)} style={{ color:'green',cursor:'pointer' }}></Icon>
                <Icon type='file-text' title='查看日志' onClick={this.toLogs.bind(this,record)} style={{ marginLeft:5,cursor:'pointer' }}></Icon>
              </div>
            );
          }
          
        }
      },
    ];

    return (
      
      <div className={styles.content}>
         {/* {JSON.stringify(this.props.staff)} */}
        <div className={styles.content_title}>
          员工管理
        </div>
        <div className={styles.content_search}>
          <Input placeholder="员工ID" onChange={this.changeInput.bind(this,'id')} />
          <Input placeholder="用户名" onChange={this.changeInput.bind(this,'username')} />
          <Input placeholder="手机号" onChange={this.changeInput.bind(this,'telephone')} />
          <Select defaultValue="状态" style={{ width: 150,marginRight:8 }} onChange={this.handleChange.bind(this,'enabled')}>
            <Option value='1'>正常</Option>
            <Option value='0'>禁用</Option>
          </Select>
          <Select defaultValue="所属分站" style={{ width: 150 }} onChange={this.handleChange.bind(this,'siteId')}>
            <Option value="1">赚多多</Option>
            <Option value="2">发大财</Option>
          </Select>
          <Button type='primary' onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
         <Table rowKey='id' 
           pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:this.state.form.pageSize,
            onChange:this.changePage
          }}
          columns={columns} 
          dataSource={staffData} 
          bordered 
          size="small" />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(Staff);