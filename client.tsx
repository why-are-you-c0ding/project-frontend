import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "@layouts/App/App";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://waycabvav.shop";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app")
);
