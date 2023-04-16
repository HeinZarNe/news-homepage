import React from "react";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Containers from "./components/Containers";

function App() {
  return (
    <div className="App">
      <Containers>
        <Nav />
        <div className="flex flex-col gap-5  md:flex-row">
          <Section1 />
          <Section2 />
        </div>
        <Section3 />
      </Containers>
    </div>
  );
}

export default App;
