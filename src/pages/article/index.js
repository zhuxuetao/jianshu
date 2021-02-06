import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom' ;

class Article extends PureComponent {
  render(){
    return (
      <div>
        {
          this.props.login ? <div>article</div> : <Redirect to='/login' />
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  login:state.getIn(['login','login'])
});

export default connect(mapStateToProps,null)(Article);