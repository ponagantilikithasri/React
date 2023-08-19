import React from "react";

const FRinput = React.forwardRef((prop, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRinput;
