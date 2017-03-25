import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './App';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';

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
      {/*<IndexRoute component={UI}/>*/}

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