import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';
export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalpage:Math.ceil(data.length / 10)
});


export const getList = (list) => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(response => {                        
            const data = response.data.data;
            dispatch(changeList(data))   
        }).catch(() => {
            console.log("err");
        })
    }
};

export const MouseEnter = () => ({
    type:constants.MOUSE_ENTER
});
export const MouseLeave = () => ({
    type:constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page
});