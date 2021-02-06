import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
	ListItem,
	ListInfo,
	LoadMore
} from '../style'
class List extends PureComponent {
	render() {
		const { articleList, articlepage, handlerGetMoreList } = this.props;
		return (
			<div>
				{
					articleList.map((item,index) => (
						<Link key={index} to={'/detail/'+item.get('id')}>
							<ListItem>
								<img className="pic" src={item.get('imgUrl')} alt=""/>
								<ListInfo>
									<h3 className="title">{item.get('title')}</h3>
									<p className="desc">{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					))
				}
				<LoadMore onClick={() => handlerGetMoreList(articlepage)}>更多文字</LoadMore>
			</div>
		)
	}
};
const mapStateToProps = (state) => ({
	articleList: state.getIn(['home', 'articleList']),
	articlepage:state.getIn(['home','articlepage'])
});

const mapDispatchToProps = (dispatch) => ({
	handlerGetMoreList(page){
		dispatch(actionCreators.getMoreList(page))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);