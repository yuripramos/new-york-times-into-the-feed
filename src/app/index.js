import App from "./App";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import store from "../utils/store";


function Root() {
  return (
    <Fragment>
      <App {...store}/>
    </Fragment>
  );
}
ReactDOM.render(<Root />, document.getElementById("app"));

