"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Router from "./components/Router";
import { DummyStorage } from "./components/DummyStorage";

ReactDOM.render(
  <Provider store={createStore(DummyStorage)}>
    <Router />
  </Provider>,
  document.getElementById("react_app_root")
);
