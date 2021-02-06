import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style'

class Header extends Component {
	constructor(props) {
		super(props);
		this.getListArea = this.getListArea.bind(this)
	}
	getListArea() {
		const { focused, list, mouseIn, page, totalpage, handlerMouseEnter, handlerLeave, handlerChangePage } = this.props;
		const jsList = list.toJS()
		const pageList = [];

		if (jsList.length) {
			for (let i = (page - 1) * 10; i < (page === totalpage ? jsList.length :page * 10); i++) {
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handlerMouseEnter}
					onMouseLeave={handlerLeave}
				>
					<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch onClick={() => handlerChangePage(page, totalpage, this.spinIcon)}>
							<span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
								换一批
							</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList >
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	render() {
		const { login, list, focused, handlerInputFocus, handlerInputBlur, Fnlogout, article } = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载app</NavItem>
					{
						this.props.login ? 
							<NavItem onClick={Fnlogout} className="right">退出</NavItem> : 
							<Link to="/Login"><NavItem className="right">登陆</NavItem></Link>
					}
					
					<NavItem className="right">
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => { handlerInputFocus(list) }}
								onBlur={handlerInputBlur}
							/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</span>
						{
							this.getListArea()
						}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/Article'>
						<Button className="writting" >
							<span className="iconfont">&#xe615;</span>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalpage: state.getIn(['header', 'totalpage']),
		login:state.getIn(['login',"login"])
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handlerInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handlerInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handlerMouseEnter() {
			dispatch(actionCreators.MouseEnter())
		},
		handlerLeave() {
			dispatch(actionCreators.MouseLeave())
		},
		handlerChangePage(page, totalpage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle)
			} else {
				originAngle = 0;
			}
			spin.style.transform = `rotate(${originAngle + 360}deg)`;

			if (page < totalpage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		},
		Fnlogout(){
			dispatch(loginActionCreators.logout())
		},
		article(login){
			console.log(login);
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);