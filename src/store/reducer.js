const defaultState = {
  inputValue: 'hahah',
  list: ['1','2','3','4']
}

export default (state=defaultState,action)=> {
  if(action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === "click_submit") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list,state.inputValue];
    newState.inputValue = '';
    return newState;
  }
  if(action.type === "delete_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}
