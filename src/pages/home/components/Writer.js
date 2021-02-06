import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
    SearchInfoSwitch,
    WriterWrapper,
    WriterListTitle,
    WriterItem,
    WriterItemInfo,
    WriterFollow,
    WriterViewAll

} from '../style';
class Writer extends PureComponent {
    constructor(props){
        super(props);
        this.getWriterList = this.getWriterList.bind(this);        
    }
    componentDidMount(){
        this.props.handlergetWriterList();
    }

    getWriterList(){
        const { WriterList,page } = this.props;
        let pageList = [];
        let jsList = WriterList.toJS();
        
        if(jsList.length){            
            for(let i = (page - 1) * 5; i < page * 5; i++ ){            
                pageList.push(
                    <WriterItem key={jsList[i].id}>
                        <img src={jsList[i].avatar_source} alt="" />
                        <WriterItemInfo>
                            <h3 className="title">{jsList[i].nickname}</h3>
                            <p className="desc">{jsList[i].desc}</p>
                        </WriterItemInfo>
                        <WriterFollow>
                            +关注
                        </WriterFollow>
                    </WriterItem> 
                )
            }
        }
        return pageList;
    }
    render(){
        const { page, totalpage, handlerChangePage } = this.props;
        return (
            <WriterWrapper>
                <img className="ad-badge" src="https://oimagea6.ydstatic.com/image?id=1243493050496265642&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" alt=""/>
                <WriterListTitle>
                    <span>推荐作家</span>
                    <SearchInfoSwitch onClick={() => handlerChangePage(page,totalpage)}>
                        <span className="iconfont spin">&#xe851;</span>
                        换一批
                    </SearchInfoSwitch>
                </WriterListTitle>  
                            
                {this.getWriterList()}

                <WriterViewAll>
                    查看全部 >
                </WriterViewAll>                
                <img className="ad-badge" src="https://oimagec3.ydstatic.com/image?id=9038614116981674727&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" alt=""/>                
            </WriterWrapper>
        )
    }
};

const mapStateToProps = (state) => ({
    WriterList:state.getIn(['home','WriterList']),
    page:state.getIn(['home','page']),
    totalpage:state.getIn(['home','totalpage'])
});

const mapDispatchToProps = (dispatch) => ({
    handlergetWriterList(){
        dispatch(actionCreators.getWriterList())
    },
    handlerChangePage(page,totalpage){
        dispatch(actionCreators.getWriterList())
        if(page < totalpage){
            dispatch(actionCreators.changePage(page+1))
        }else{
            dispatch(actionCreators.changePage(1))
        }        
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Writer);