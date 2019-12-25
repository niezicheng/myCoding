import React from 'react';
import styles from './logs.less';
import { DatePicker,Input,Button,Table } from 'antd';
import { connect } from 'dva';
import formatData from '@/utils/formatData';

const { RangePicker } = DatePicker;

class Logs extends React.Component {
  //构造函数
	constructor(props){
		super(props)
		this.state={
      form:{
        page:0,
        pageSize:10,
        // userId:+this.props.match.params.id,
        userId:'',
      }
		}
  }
  
  componentDidMount(){
    // console.log(+this.props.match.params.id);
    //获取详细日志数据信息【connect连接才能获取到props.dispatch】
    // console.log(this.props.dispatch,'=======');
    this.props.dispatch({
        type:'logs/fetchLoadLogs',
        payload:this.state.form,
      });

  }
  //搜索按钮【查询显示符合条件的logs数据信息】
  search = ()=>{
    this.props.dispatch({
      type:'logs/fetchLoadLogs',
      payload:this.state.form,
    });
  }

  //Input框数据双向绑定事件
  changeInput = (e)=>{
    this.setState({
      form:{
        ...this.state.form,
       userId:e.target.value,
      }
    })
  }

  //分页页面改变事件
  changePage =(page,pageSize)=>{
    //更新组件中的state数据,在更新回调函数中分发action
    this.setState({
      form:{
        ...this.state.form,
        page:page-1,
        pageSize,
      }
    },()=>{
      this.props.dispatch({
        type:'logs/fetchLoadLogs',
        payload:this.state.form,
      });
    })
  
  }

  //日期选择框改变事件
  ChangeDate = (date, dateString)=>{
    // console.log(date, dateString,'111111111');
    // console.log(dateString[0] == false);
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

	render(){
    const { logsData } = this.props.logs;
    const { form } = this.state;

    const columns = [
      {
        title: '日志ID',
        dataIndex: 'id',
      },
      {
        title: '操作者ID',
        dataIndex: 'userId',
      },
      {
        title: '内容',
        dataIndex: 'actionContent',
      },
      {
        title: '操作时间',
        dataIndex: 'actionTime',
        render:(text)=>{ 
          return (
            <div>{formatData(text)}</div>
          )
        }
      },
    ];

		return(
			<div className={ styles.content }>
        <div className={ styles.content_title }>
          日志中心
        </div>
        <div className={ styles.content_search }>
          <RangePicker onChange={this.ChangeDate} />
          <Input placeholder='操作人ID' type="text" value={form.userId} onChange={this.changeInput}/>
          <Button type='primary' onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table 
          rowKey='id' 
          pagination={{
            pageSize:form.pageSize,
            total:this.props.logs.total,
            showTotal:total => `共 ${total} 条`,
            onChange:this.changePage,
          }} 
          columns={columns} 
          dataSource={logsData} 
          size='small'
          />
        </div>
      </div>
			)
	}
}
export default connect(state=>state)(Logs);
// export default Logs;