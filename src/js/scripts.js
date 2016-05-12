
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Main from "./components/Main.js";

const content = document.getElementById('content');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>,
content);
