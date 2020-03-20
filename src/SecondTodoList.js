import React, {Component, Fragment} from 'react';
import { Input, Button, List } from 'antd';

import { connect } from 'react-redux';



import 'antd/dist/antd.css';


class SecondTodoList extends Component {
  
  render() {
    return (
      <Fragment>
        <div style={{margin:'10px 0 10px 10px'}}>
          <Input placeholder="请输入内容" 
            style={{width:'300px',marginRight:'10px'}} 
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
          <Button type="primary" onClick={this.props.clickSubmit}>提交</Button>
        </div>
        <List
          style={{width:'300px',marginLeft:'10px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>}
        />
      </Fragment>
    )
  }
}

// 把store里的数据映射到 这个组件的props上,mapStateToProps是个函数,接收一个参数,这个参数就是store里的数据
const mapStateToProps = (state)=> {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch()映射到这个组件的props上
const mapDispatchToProps = (dispatch)=> {
  return {
    inputChange(e) {
      console.log(e.target.value);
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    clickSubmit() {
      const action = {
        type:'click_submit'
      }
      dispatch(action);
    },
    deleteItem(index) {
      const action = {
        type:'delete_item',
        index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SecondTodoList);
