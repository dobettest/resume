import React from "react";
import ReactDom from "react-dom";
import Router from "./router";
function App() {
  return <Router/>;
}
ReactDom.render(<App />, document.getElementById("root"));
