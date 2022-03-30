import React from "react";
import Logo from "@assets/logo.png";
import {useNavigate} from "react-router-dom"
import "./index.scss";
import {shell} from "electron";
function root() {
  const navigate = useNavigate();
  const onRouterToLink=(text:string)=>{
    switch (text) {
      case '简历':
        console.log('跳转到简历页面');
        navigate('/resume')
        break;
      case '源码':
        shell.openExternal('https://github.com/PDKSophia/visResumeMook')
        console.log('进入github');
      case '介绍':
        console.log('介绍');
      default:
        break;
    }
  }
  return <div className="root">
    <div className="container"> 
      <img src={Logo} alt="这是首页logo"/>
      <div className="title">visResumeBook</div>
      <div className="tip">这是一个模板简历制作平台,让你的简历更出色</div>
      <div className="action">
        {["介绍","简历","源码"].map((v,idx)=><div className="item" key={idx} onClick={()=>onRouterToLink(v) }>
            {v}
          </div>)
        }
      </div>
      <div className="copyright">
        <div className="footer">
          <p className="copyright">
          Copyright © 2021-{new Date().getFullYear()} All Rights Reserved. Copyright By dobettest
          </p>
        </div>
      </div>
    </div>
  </div>;
}
export default root;