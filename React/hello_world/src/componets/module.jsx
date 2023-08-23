import React from "react";
import ReactDOM from "react-dom";
export default function Module() {
  return ReactDOM.createPortal(
    <h1>Module</h1>,
    document.getElementById("portal-module")
  );
}
