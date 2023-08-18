import React from "react";
import Cloumn from "./Cloumn";

export default function FragamentDemo() {
  return (
    // <div> instead of using this extra tage (why because we can see this tag while we inspect the page so that why i'm calling this is an extra tag)
    <React.Fragment>
      {/* <h1>FragamentDemo</h1>
      <p>Hi this Likitha sri</p>
      </div> */}
      <table>
        <tbody>
          <tr>
            <Cloumn />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
