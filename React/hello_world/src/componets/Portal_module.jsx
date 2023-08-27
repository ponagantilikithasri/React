import React from "react";
import ReactDom from "react-dom";
export default function Portal_module({ P_show, P_Close }) {
  if (!P_show) return null;
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="content">
        <p>Portal_module</p>
        <button onClick={P_Close}>Close</button>
      </div>
    </div>
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
