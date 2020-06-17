import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostIndex from "./components/posts_index";
import { PostNew } from "./components/post_new";
import { PostsShow } from "./components/posts_show";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew}></Route>
          <Route path="/posts/:id" component={PostsShow}></Route>
          <Route path="/" component={PostIndex}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
