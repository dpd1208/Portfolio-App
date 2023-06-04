import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
 
ReactDOM.render(
  <BrowserRouter basename={'/'}>
    <Main />
  </BrowserRouter>,
  document.querySelector("#root")
);