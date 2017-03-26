import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './App';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';

import Pages from './ui/index';
const { Home, Button, List, Input, Toast, Dialog, Progress, Msg, Article,
  ActionSheet, Icons, Panel, NavBar, NavBar2, TabBar, TabBar2, SearchBar, Gallery,
  Uploader, Flex, Footer, Grid, LoadMore, Preview, MsgSuccess, MsgFail, TopTips,
  Popup, Picker, Slider, Badge, PTR, Infinite
} = Pages;

export default (store) => {
  // const requireLogin = (nextState, replace, cb) => {
  //   function checkAuth() {
  //     const { auth: { user }} = store.getState();
  //     if (!user) {
  //       // oops, not logged in, so can't be here!
  //       replace('/');
  //     }
  //     cb();
  //   }
	//
  //   if (!isAuthLoaded(store.getState())) {
  //     store.dispatch(loadAuth()).then(checkAuth);
  //   } else {
  //     checkAuth();
  //   }
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      {/*<IndexRoute component={Home}/>*/}

      {/*<IndexRoute component={Home}/>*/}
      {/*<Route path="button" component={Button}/>*/}
      {/*<Route path="list" component={List}/>*/}
      {/*<Route path="input" component={Input}/>*/}
      {/*<Route path="toast" component={Toast}/>*/}
      {/*<Route path="dialog" component={Dialog}/>*/}
      {/*<Route path="progress" component={Progress}/>*/}
      {/*<Route path="msg" component={Msg} />*/}
      {/*<Route path="msg/success" component={MsgSuccess}/>*/}
      {/*<Route path="msg/fail" component={MsgFail}/>*/}
      {/*<Route path="article" component={Article}/>*/}
      {/*<Route path="actionsheet" component={ActionSheet}/>*/}
      {/*<Route path="icons" component={Icons}/>*/}
      {/*<Route path="panel" component={Panel}/>*/}
      {/*<Route path="navbar" component={NavBar}/>*/}
      {/*<Route path="navbar2" component={NavBar2}/>*/}
      {/*<Route path="tabbar" component={TabBar}/>*/}
      {/*<Route path="tabbar2" component={TabBar2}/>*/}
      {/*<Route path="searchbar" component={SearchBar}/>*/}
      {/*<Route path="gallery" component={Gallery}/>*/}
      {/*<Route path="uploader" component={Uploader}/>*/}
      {/*<Route path="flex" component={Flex}/>*/}
      {/*<Route path="footer" component={Footer}/>*/}
      {/*<Route path="grid" component={Grid}/>*/}
      {/*<Route path="loadmore" component={LoadMore}/>*/}
      {/*<Route path="preview" component={Preview}/>*/}
      {/*<Route path="toptips" component={TopTips}/>*/}
      {/*<Route path="popup" component={Popup}/>*/}
      {/*<Route path="picker" component={Picker}/>*/}
      {/*<Route path="slider" component={Slider}/>*/}
      {/*<Route path="badge" component={Badge}/>*/}
      {/*<Route path="ptr" component={PTR}/>*/}
      {/*<Route path="infinite" component={Infinite}/>*/}

      { /* Routes requiring login */ }
      {/*<Route onEnter={requireLogin}>*/}
        {/*<Route path="chat" component={Chat}/>*/}
        {/*<Route path="loginSuccess" component={LoginSuccess}/>*/}
      {/*</Route>*/}

      { /* Routes */ }

      { /* Catch all route */ }
      {/*<Route path="*" component={UI}/>*/}
    </Route>
  );
};