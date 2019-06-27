import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreatePost from "./CreatePost";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";


const { SubMenu } = Menu;
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


let TotalApp = (
  <ReduxProvider store={reduxStore}>
  <Router>
    <Menu mode="horizontal">
      <Menu.Item href="/" key="mail">
        <a href="/" rel="noopener noreferrer">
          All Posts
        </a>
      </Menu.Item>

      <Menu.Item key="alipay">
        <a href="/about" rel="noopener noreferrer">
          Create New Posts
        </a>
      </Menu.Item>
    </Menu>

    <Route exact path="/" component={CreatePost} />
    {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
  </Router>
  </ReduxProvider>
);

ReactDOM.render(TotalApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
