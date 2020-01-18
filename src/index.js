import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import Login from "../src/components/login";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Login onSubmit={showResults} />
      {/* <Values form="submitValidation" /> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
