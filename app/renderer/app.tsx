import React from "react";
import ReactDom from "react-dom";
import Router from "./router";
import store from "./store";
import { Provider } from "react-redux"
function App() {
  return <Provider store={store}>
    <Router />
  </Provider>;
}
ReactDom.render(<App />, document.getElementById("root"));
