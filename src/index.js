import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import 'weui';
import getRoutes from './routes';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

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