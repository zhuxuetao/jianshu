import * as constants from './constants'
import { fromJS } from 'immutable';
const defaultSate = fromJS({
    focused:false,
    list:[],
    page:1,
    totalpage:1,
    mouseIn:false,
    rotate:false
});
export default (state = defaultSate, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            //immutable对象的set方法,会结合之前的immutable对象的值
            //和设置的值,返回一个全新的对象
            return state.set("focused",true);
        case constants.SEARCH_BLUR:
            return state.set("focused",false);
        case constants.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalpage:action.totalpage
            })
        case constants.MOUSE_ENTER:
            return state.set("mouseIn",true)
        case constants.MOUSE_LEAVE:
            return state.set("mouseIn",false)
        case constants.CHANGE_PAGE:
            return state.set("page",action.page)
        default:
            return state;
    }
};