import { useState } from "react";
import "./App.css";
import HelloWorld from "./componets/helloWorld";
import Greet from "./componets/Greet";
import Class_component from "./componets/Class_component";
import Ex_jsx from "./componets/jsx_with_without";
import Message from "./componets/Message";
import Count from "./componets/Count";
import State_destruct from "./componets/state_destruct";
import Fun_Click from "./componets/Function_Click";
import Class_Click from "./componets/Class_Click";
import Event_Bind from "./componets/Event_Bind";
import ParentComponent from "./componets/ParentComponent";
import UseGreet from "./componets/UseGreet";
import Name_List from "./componets/Name_List";
function App() {
  return (
    <>
      <Name_List />
      {/* <UseGree/t /> */}
      {/* <ParentComponent /> */}
      {/* </Event_Bind /> */}
      {/* <Class_Click /> */}
      {/* <Fun_Click /> */}
      {/* <State_destruct /> */}
      {/* <Count /> */}
      {/* <Message /> */}
      {/* This is all about components*/}
      {/* {/* we can use components are reuseble   */}
      {/* <Greet name="Likitha Sri" work="Student">
        <p>This is a childeren</p>
      </Greet>
      <Class_component name="Bangaram"></Class_component> */}

      {/* <Greet name="Jyotsna Sri" work="Job">
        <button> Action</button>
      </Greet>
      <HelloWorld />
      <Ex_jsx /> */}
    </>
  );
}

export default App;
