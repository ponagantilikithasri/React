import React from "react";

function MemoComp({ name }) {
  console.log("MemoComponent");
  return <div>Memo {name}</div>;
}
export default React.memo(MemoComp);
