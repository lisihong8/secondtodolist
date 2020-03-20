import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

import { connect } from 'react-redux';
import { changeInputValueAction, clickSubmitAction, deleteItemAction } from './store/actionCreators';



import 'antd/dist/antd.css';


const SecondTodoList = (props)=> {

  const { inputValue, list, inputChange, clickSubmit, deleteItem } = props;

  return (
    <Fragment>
      <div style={{margin:'10px 0 10px 10px'}}>
        <Input placeholder="请输入内容" 
          style={{width:'300px',marginRight:'10px'}} 
          value={inputValue}
          onChange={inputChange}
        />
        <Button type="primary" onClick={clickSubmit}>提交</Button>
      </div>
      <List
        style={{width:'300px',marginLeft:'10px'}}
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={(item,index) => <List.Item onClick={()=>{deleteItem(index)}}>{item}</List.Item>}
      />
    </Fragment>
  )
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
      // const action = {
      //   type: CHANGE_INPUT_VALUE,
      //   value: e.target.value
      // }
      const action = changeInputValueAction(e.target.value)
      dispatch(action);
    },
    clickSubmit() {
      // const action = {
      //   type: CLICK_SUBMIT
      // }
      const action = clickSubmitAction();
      dispatch(action);
    },
    deleteItem(index) {
      // const action = {
      //   type: DELETE_ITEM,
      //   index
      // }
      const action = deleteItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SecondTodoList);
