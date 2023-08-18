import React from "react";

export default function Cloumn() {
  return (
    // <div> // while using div tag as parent for td it shown an warning in console instead of that we use Fragment
    //   <React.Fragment>
    //       {/* instead of this we can use <></> empty tag */}
    //   <td>Name</td>
    //   <td>Likitha Sri</td>
    // </React.Fragment>
    // </div>
    <>
      <td>Name</td>
      <td>Likitha Sri</td>
    </>
  );
}
