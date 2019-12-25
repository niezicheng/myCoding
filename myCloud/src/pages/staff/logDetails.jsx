import React from 'react';
import styles from './logDetails.less';
import { DatePicker,Input,Button,Table } from 'antd';
import { connect } from 'dva';

const { RangePicker } = DatePicker;

class LogDetails extends React.Component {
  //构造函数
	constructor(props){
		super(props)
		this.state={
      form:{
        page:0,
        pageSize:10,
        userId:this.props.match.params.id,
        // userId:'',
      }
		}
  }
  
  componentDidMount(){
    // console.log(+this.props.match.params.id);
    //获取详细日志数据信息【connect连接才能获取到props.dispatch】
    // console.log(this.props.dispatch,'=======');
    this.props.dispatch({
        type:'logDetails/fetchLoadLogDetails',
        payload:this.state.form,
      });

  }
  //搜索按钮【查询显示符合条件的logDetails数据信息】
  search = ()=>{
    this.props.dispatch({
      type:'logDetails/fetchLoadLogDetails',
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
        type:'logDetails/fetchLoadLogDetails',
        payload:this.state.form,
      });
    })
  
  }

  //日期选择框改变事件
  ChangeDate = (date, dateString)=>{
    // console.log(date, dateString,'1111111');
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
  }

	render(){
    const { logDetailsData } = this.props.logDetails;
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
          // console.log(text,'$$$$$$$$$$');
          //重写Date原型方法toLocaleString()改变输出日期格式为指定格式
          Date.prototype.toLocaleString = function() {
            function formatData(num){
              return num>10?num:'0'+num;
            }
            return (
              formatData(this.getFullYear()) + "-" + 
              formatData((this.getMonth() + 1)) + "-" + 
              formatData(this.getDate()) + " " + 
              formatData(this.getHours()) + ":" + 
              formatData(this.getMinutes()) + ":" + 
              formatData(this.getSeconds())
            )};
          let actionTime = new Date(text).toLocaleString();
          return (
            <div>{actionTime}</div>
          )
        }
      },
    ];

		return(
			<div className={ styles.content }>
        <div className={ styles.content_title }>
          日志内容
        </div>
        <div className={ styles.content_search }>
          <RangePicker onChange={this.ChangeDate} />
          <Input defaultValue='操作人ID' type="text" value={form.userId} onChange={this.changeInput}/>
          <Button type='primary' onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table 
          rowKey='id' 
          pagination={{
            pageSize:form.pageSize,
            total:this.props.logDetails.total,
            showTotal:total => `共 ${total} 条`,
            onChange:this.changePage,
          }} 
          columns={columns} 
          dataSource={logDetailsData} 
          size='small'
          />
        </div>
      </div>
			)
	}
}
export default connect(state=>state)(LogDetails);
// export default LogDetails;