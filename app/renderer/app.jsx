import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Routes,Route } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
        <div>可视化简历平台</div>
        <div>这是electron + react </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home / >} />
      </Routes>
    </Router>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
