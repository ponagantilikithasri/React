import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function Portal_module() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const toogleMethod = () => {
    setIsModelOpen(!isModelOpen);
  };
  return ReactDOM.createPortal(
    <div>
      <h1>My App</h1>
      <p>
        This is an example of how you might use React.createPortal. I think it
        is a pretty neat API that is yet another awesome escape hatch that React
        provides for practical reasons. Sometimes you just need to render
        something completely outside the React Tree.
      </p>
    </div>,
    document.getElementById("portal-modul")
  );
}
// import React from "react";
// import ReactDOM from "react-dom";
// export default function Module() {
//   return ReactDOM.createPortal(
//     <h1>Module</h1>,
//     document.getElementById("portal-mod")
//   );
// }
