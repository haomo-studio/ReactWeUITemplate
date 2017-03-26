import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import FastClick from 'fastclick';
import 'weui';
import "babel-polyfill";

import Pages from './index';
const { Home, Button, List, Input, Toast, Dialog, Progress, Msg, Article,
ActionSheet, Icons, Panel, NavBar, NavBar2, TabBar, TabBar2, SearchBar, Gallery,
Uploader, Flex, Footer, Grid, LoadMore, Preview, MsgSuccess, MsgFail, TopTips,
Popup, Picker, Slider, Badge, PTR, Infinite
} = Pages;


class App extends React.Component {
        render() {
                return (
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                            {React.cloneElement(this.props.children, {
                                    key: this.props.location.pathname
                            })}
                    </ReactCSSTransitionGroup>
                );
        }
}

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

ReactDOM.render((
    <Router>
            <Route path="/" component={App}>

            </Route>
    </Router>
), document.getElementById('container'));