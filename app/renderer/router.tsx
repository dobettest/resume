import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Root from "@src/container/root";
import Resume from "@src/container/resume";
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}
export default Router;
