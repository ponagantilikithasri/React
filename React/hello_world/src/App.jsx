import { useState } from "react";
import "./App.css";
import HelloWorld from "./componets/helloWorld";
import Greet from "./componets/Greet";
import Class_component from "./componets/Class_component";
import Ex_jsx from "./componets/jsx_with_without";
function App() {
  return (
    <>
      {/* we can use components are reuseble  */}
      <Greet name="Likitha Sri" work="Student">
        <p>This is a childeren</p>
      </Greet>
      <Greet name="Jyotsna Sri" work="Job">
        <button> Action</button>
      </Greet>
      <HelloWorld />
      <Class_component name="Bangaram"></Class_component>
      <Ex_jsx />
    </>
  );
}

export default App;
