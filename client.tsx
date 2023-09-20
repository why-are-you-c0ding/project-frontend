import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@layouts/App/App";
import { Provider } from "react-redux";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import store from "@redux/store";

import { worker } from "@mock/browser";
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.querySelector("#app") as HTMLElement);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
);
