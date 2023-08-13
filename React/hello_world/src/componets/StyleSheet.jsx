import React from "react";
import "./MyStyle.css";
export default function StyleSheet(prop) {
  //   return <div className="primary">StyleSheet</div>;
  let className = prop.Primary ? "primary" : ""; // checck primary in App.jsx if there Primary is true then only colour will assigned
  return <div className={`${className} fontxl`}>Style sheet</div>;
}
