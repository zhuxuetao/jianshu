import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title:"",
    contentInfo:""
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.ADD_DETAIL_INFO:
      return state.merge({
        title:action.title,
        contentInfo:action.content
      })
    default:
      return state;
  }
};