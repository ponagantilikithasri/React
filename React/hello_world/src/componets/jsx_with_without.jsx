import React from "react";
const Ex_jsx = () => {
  //   return (
  //     <div>
  //       <h1>This is with 'jsx and i don't need import react</h1>
  //     </div>
  //   );
  //--->for without jsx we need to import react and also we ==> React.createElement() and it need 3 parameters
  //      paremeter 1 represent tags like div or h1 or any other tags
  //      parameter 2 represent class or id which css properties
  //      parameter 3 it represent the text me ans what we want to see on browser if don't any parmeter we use "null"
  // if we wan't any inner tags we use another React.createElement() with min 3 parameters

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "dummyclass" },
      "Hello This is without jsx"
    )
  );
};
export default Ex_jsx;
