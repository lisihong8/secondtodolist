
import { CHANGE_INPUT_VALUE, CLICK_SUBMIT, DELETE_ITEM} from './actionTypes';

export const changeInputValueAction = (value)=> ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const clickSubmitAction = ()=> ({
  type: CLICK_SUBMIT
})

export const deleteItemAction = (index)=> ({
  type: DELETE_ITEM,
  index
})
