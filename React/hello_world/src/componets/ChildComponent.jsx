import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.gr_parent("child")}>ChildComponent</button>
    </div>
  );
}
