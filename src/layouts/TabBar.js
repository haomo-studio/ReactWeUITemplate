import React, {Component} from 'react';
import { Tab, TabBarItem } from 'react-weui';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import IconButton from './images/icon_nav_button.png';
import IconMsg from './images/icon_nav_msg.png';
import IconArticle from './images/icon_nav_article.png';

import {Home, Button} from '../ui/index';

export default class TabBar extends Component {
  render() {
    return (
      <Tab type="tabbar">
        <TabBarItem icon={<img src={IconButton} alt="button"/>} label="UI">
          {/*<Home></Home>*/}
          {/*<ReactCSSTransitionGroup*/}
            {/*component="div"*/}
            {/*transitionName="page"*/}
            {/*transitionEnterTimeout={500}*/}
            {/*transitionLeaveTimeout={500}*/}
            {/*style={{height: '100%'}}>*/}

            {/*{React.cloneElement(this.props.children, {*/}
              {/*key: this.props.location.pathname*/}
            {/*})}*/}
          {/*</ReactCSSTransitionGroup>*/}
          UI
        </TabBarItem>

        <TabBarItem icon={<img src={IconMsg} alt="widgets"/>} label="Widgets">
          Widgets
        </TabBarItem>

        <TabBarItem icon={<img src={IconArticle} alt="pages"/>} label="Pages">
          Pages
        </TabBarItem>

        <TabBarItem icon={<img src={IconArticle} alt="apps"/>} label="Apps">
          Apps
        </TabBarItem>
      </Tab>
    );
  }
};
