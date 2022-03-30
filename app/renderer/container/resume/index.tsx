import React from "react";
import fileAction from "@src/common/utils/file";
function Resume() {
  fileAction.read("./index.tsx").then((data) => {
    console.log(data)
  })
  return <div>
    这是简历模块
  </div>
}
export default Resume;