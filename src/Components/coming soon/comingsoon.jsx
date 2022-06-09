import React from "react";
import ReactDOM from "react-dom";
import CountDown from './countdown';
import "./comingsoon.css";

function Comingsoon() {
  return (
    <div className="App">
      <div className="container">
        <h1>
         WebPage
          <br />
          Coming Soon
        </h1>
        <CountDown/>
      </div>
    </div>
  );
}
export default Comingsoon
