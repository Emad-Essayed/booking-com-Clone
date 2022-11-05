import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./App/store";
import { Provider as ContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>
  // </React.StrictMode>
);
