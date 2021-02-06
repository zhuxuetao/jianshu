import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';

import Home from './pages/home/loadable.js';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Article from './pages/article';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>                 
            <Fragment>
              <Header/>
              {/* 当访问路由/detail  时home也会显示   是因为home 路由为/ 而 /detail内也存在/ 所以同时展示*/}
              {/* exact  当你的路径完全与 route一样时显示对应内容 */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/Login' exact component={Login}></Route>
              <Route path='/Article' component={Article}></Route>
            </Fragment>
          </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
