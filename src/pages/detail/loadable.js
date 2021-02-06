import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return <h3>loading...</h3>
  }
});
export default () => <LoadableComponent/>