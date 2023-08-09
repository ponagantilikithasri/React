// export default function Greet() {
//   return <>Hi This is Greet function present in Greet File</>;
// }
//Note: We can use only one export for one file
// Arrow function

import { Children } from "react";

//props or properties
const Arr_Greet = (props) => {
  // props.name = "Arujn";// it doesn't possible because props are immutable
  return (
    <div>
      <h1>
        Hi this is {props.name} and she is a {props.work}
      </h1>
      {props.children}
    </div>
  );
};
export default Arr_Greet;
