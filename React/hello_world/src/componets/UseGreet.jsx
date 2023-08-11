// About conditional rendering
import React, { useState } from "react";

export default function UseGreet() {
  const [isLogIn, setLogin] = useState(true); // here we give value to isLogin true or false
  //If-else condition approch
  //   if (isLogIn) {
  //     return <div>Welcome Likki</div>;
  //   } else {
  //     return <div>Welcom Guest</div>;
  // Elementvariable approch
  //   let msg;
  //   if (isLogIn) {
  //     msg = "Welcome Likki";
  //   } else {
  //     msg = "Welcome Guest";
  //   }
  //   return msg;
  //   }
  //Ternary condition apporch
  // return isLogIn ? <div>Welcome Likki</div> : <div>Welcome guest</div>;
  //Short-circuit apporch
  return isLogIn && <div>Welcome Likki</div>; // it excute only when isLogin is true
}
