import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostIndex from "./components/posts_index";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={PostIndex}></Route>
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
