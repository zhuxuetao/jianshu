import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const changePage = (page) => ({
    type:constants.CHANGE_WRITER_PAGE,
    page
});

const AddWriterList = (WriterList) => ({
    type:constants.ADD_WRITERLIST,
    WriterList:fromJS(WriterList),
    totalpage:(WriterList.length / 5)
});

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerList.json').then(res => {
            dispatch(AddWriterList(res.data.data))
        }).catch(err => {
            console.log('err');
        })
    }
};

const getHomeMsg = (msg) => ({
    type:constants.GET_HOME_MSG,
    TopicList:fromJS(msg.TopicList),
    articleList:fromJS(msg.articleList),
    RecommendList:fromJS(msg.RecommendList)
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {      
            dispatch(getHomeMsg(res.data.data))
        }).catch(err => {
            console.log("err");
        })
    }
};

const addHomeList = (articleList,page) => ({
    type:constants.ADD_HOME_LIST,
    articleList,
    articlepage:page
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then(res => {      
            dispatch(addHomeList(res.data.data,page + 1))
            console.log(res);
        }).catch(err => {
            console.log("err");
        })
    }
};

export const scrollBackTop = (boo) => ({
    type:constants.CHANGE_BACK_TOP_SHOW,
    boo
});

export const getMsg = () => {
    return (dispatch) => {       
        axios.post('/jianshu/novelApi').then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log('err');
        })
    }
}