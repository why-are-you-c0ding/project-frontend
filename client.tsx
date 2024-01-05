import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "@layouts/App/App";
import { Provider } from "react-redux";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import store from "@redux/store";

async function enableMocking() {
  if (process.env.REACT_START_MSW !== "true") {
    return;
  }

  const { worker } = await import("@mock/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest(req, print) {
      const allowedDomain = "https://loremflickr.com/";
      const allowedDomain2 = "https://picsum.photos/";
      const allowedDomain3 = " https://fonts.gstatic.com";

      if (
        req.url.pathname.startsWith("/public/") ||
        req.url.pathname.startsWith("/slideImage/") ||
        req.url.pathname.startsWith("/dist/") ||
        req.url.href.startsWith(allowedDomain) ||
        req.url.href.startsWith(allowedDomain2) ||
        req.url.href.startsWith(allowedDomain3)
      ) {
        return;
      }

      print.warning();
    },
  });
}

const root = ReactDOM.createRoot(document.querySelector("#app") as HTMLElement);

enableMocking().then(() => {
  root.render(
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>,
  );
});
