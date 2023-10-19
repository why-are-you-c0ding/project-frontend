import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "@layouts/App/App";
import { Provider } from "react-redux";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import store from "@redux/store";

import { worker } from "@mock/browser";
if (process.env.REACT_START_MSW === "true") {
  worker.start();
}

const root = ReactDOM.createRoot(document.querySelector("#app") as HTMLElement);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
);
