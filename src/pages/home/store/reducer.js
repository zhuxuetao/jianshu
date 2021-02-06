//immutable  store数据优化
//fromJS 将js对象转换为immutable对象 其作用为不可修改对象, store数据发生修改时immutable对象不是修改对象数据,
//而是创建一个新的immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultSate = fromJS({
	TopicList: [],
	articleList:[],
	RecommendList:[],
	WriterList:[],
	page:1,
	totalpage:1,
	articlepage:1,
	BackTopShow:false
});
export default (state = defaultSate, action) => {
	switch (action.type) {
		case constants.CHANGE_WRITER_PAGE:
			return state.set("page",action.page);
		case constants.ADD_WRITERLIST:
			return state.merge({
				WriterList:action.WriterList,
				totalpage:action.totalpage
			});
		case constants.GET_HOME_MSG:
			return state.merge({
				TopicList:fromJS(action.TopicList),
				articleList:fromJS(action.articleList),
				RecommendList:fromJS(action.RecommendList)
			});
		case constants.ADD_HOME_LIST:
			return state.merge({
				articleList:state.get('articleList').concat(fromJS(action.articleList)),
				articlepage:action.articlepage
			});
		case constants.CHANGE_BACK_TOP_SHOW:
			return state.set("BackTopShow",action.boo);
		default:
			return state;
	}
};