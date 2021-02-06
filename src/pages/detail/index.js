import React , { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom'


import { 
    DetailWrapper,
    Header,
    Content
} from './style'


class Detail extends Component {

    componentDidMount(){        
        console.log(this.props.match.params.id);
        this.props.getDetailInfo(this.props.match.params.id);
    }

    render(){
        const { title, contentInfo } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:contentInfo}}>
                </Content>
            </DetailWrapper>
        )
    }
};
const mapStateToProps = (state) => ({
    contentInfo:state.getIn(['detail','contentInfo']),
    title:state.getIn(['detail','title']),
});
const mapDispatchToProps = (dispatch) => ({
    getDetailInfo(id){
        dispatch(actionCreators.getDetailInfo(id))
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));