import { useState } from "react";
import Module from "./componets/module";
import Hero_errorbo from "./hero_errorbo";
import Errorboundary from "./Errorboundary";

function App() {
  return (
    <>
      {/* <Module /> */}
      <Errorboundary>
        <Hero_errorbo hero_name={"Superman"} />
      </Errorboundary>
      <Errorboundary>
        <Hero_errorbo hero_name={"Bat's man"} />
      </Errorboundary>
      <Errorboundary>
        <Hero_errorbo hero_name={"joker"} />
      </Errorboundary>
    </>
  );
}
export default App;
