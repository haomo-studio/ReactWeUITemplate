import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import 'weui';
import getRoutes from './routes';
// import { createStore } from 'redux';

import createBrowserHistory from 'history/createBrowserHistory'

import 'weui/dist/style/weui.min.css';
import './index.css';

const history = createBrowserHistory();
// const store = createStore(
// 	reducer, /* preloadedState, */
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

var destination = document.getElementById('root');

// 不采用React Router时的写法
// render(
//   <App />,
//   document.getElementById('root')
// );

// 采用React Router时的写法
render(
	<Router history={history}>
		{getRoutes()}
	</Router>,
	destination
);