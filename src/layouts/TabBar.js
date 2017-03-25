import React from 'react';
import { Tab, TabBarItem, Article } from 'react-weui';
import IconButton from './images/icon_nav_button.png';
import IconMsg from './images/icon_nav_msg.png';
import IconArticle from './images/icon_nav_article.png';

export default class TabBar extends React.Component {
  render() {
    return (
      <Tab type="tabbar">
        <TabBarItem icon={<img src={IconButton} alt="button"/>} label="UI">
          <Article>
            <h1>Page 1</h1>
            <section>
              <h2 className="title">Heading</h2>
              <section>
                <h3>1.1 Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute</p>
              </section>
            </section>
          </Article>
        </TabBarItem>
        <TabBarItem icon={<img src={IconMsg} alt="msg"/>} label="Widgets">
          <Article>
            <h1>Page 2</h1>
            <section>
              <h2 className="title">Heading</h2>
              <section>
                <h3>2.1 Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute</p>
              </section>
            </section>
          </Article>
        </TabBarItem>
        <TabBarItem icon={<img src={IconArticle} alt="article"/>} label="Pages">
          <Article>
            <h1>Page 3</h1>
            <section>
              <h2 className="title">Heading</h2>
              <section>
                <h3>3.1 Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute</p>
              </section>
            </section>
          </Article>
        </TabBarItem>

        <TabBarItem icon={<img src={IconArticle} alt="article"/>} label="Apps">
          <Article>
            <h1>Page 3</h1>
            <section>
              <h2 className="title">Heading</h2>
              <section>
                <h3>3.1 Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute</p>
              </section>
            </section>
          </Article>
        </TabBarItem>
      </Tab>
    );
  }
};
