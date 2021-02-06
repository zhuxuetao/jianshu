import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const addDetailInfo = (msg) => ({
  type:constants.ADD_DETAIL_INFO,
  title:fromJS(msg.title),
  content:fromJS(msg.content)
});


export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detailInfo.json?id='+id).then((res) => {
      dispatch(addDetailInfo(res.data.data))      
    }).catch(err => {
      console.log('err');
    })
  }
};