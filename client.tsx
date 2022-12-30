import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "@layouts/App/App";
import { Provider } from "react-redux";
import store from "./redux/store";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://waycabvav.shop";

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
