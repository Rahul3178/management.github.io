import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./MyComponents/Header";
import{ Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

ReactDOM.render(
  <>
  <Header title="My To-Do List" SearchBar={false}/>
  <Todos/>
  <Footer/>
    
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
