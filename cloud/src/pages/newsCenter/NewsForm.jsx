import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

class NewsForm extends React.Component {
 
  render() {
    const plainOptions = ['商家', '推广员'];
    const { getFieldDecorator } = this.props.form;
    getFieldDecorator('id');
    getFieldDecorator('status');

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input placeholder="标题" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('receiver', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
             <Checkbox.Group options={plainOptions} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <TextArea  placeholder="请输入内容" autosize={{ minRows: 2, maxRows: 6 }}/>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const mapPropsToFields=(props)=> {
  var obj={}
	for(var key in props.singleRecord){
		obj[key] = Form.createFormField({ value: props.singleRecord[key]})
  }
	return obj
}

export default Form.create({mapPropsToFields})(NewsForm);