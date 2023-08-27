import React from "react";
import "../App.css";
import { useState } from "react";
import Portal_module from "./Portal_module";
export default function () {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="App">
      <p>This is module button</p>
      <button onClick={() => setShow(true)}>Module </button>
      <Portal_module P_show={show} P_Close={() => setShow(false)} />
    </div>
  );
}
