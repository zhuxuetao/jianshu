import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style'
class Topic extends PureComponent {
    render(){
        return (
            <div>
                <TopicWrapper>
                    {
                        this.props.TopicList.map(item => {
                            return (
                                <TopicItem key={item.get('id')}>
                                    <img src={item.get('src')} alt=""/>
                                    {item.get('title')}
                                </TopicItem>
                            )
                        })
                    }
                    
                </TopicWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    TopicList:state.getIn(['home','TopicList'])
});

export default connect(mapStateToProps,null)(Topic);