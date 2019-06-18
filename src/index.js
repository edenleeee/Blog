import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

let TotalApp = (
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

    <Route exact path="/" component={App} />
    {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
  </Router>
);

ReactDOM.render(TotalApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
