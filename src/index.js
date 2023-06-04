import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
 
ReactDOM.render(
  <BrowserRouter basename={'/portfolio'}>
    <Main />
  </BrowserRouter>,
  document.querySelector("#root")
);