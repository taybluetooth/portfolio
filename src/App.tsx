import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-screen h-[var(--landing-height)] bg-beige"></div>
    </React.Fragment>
  );
}

export default App;
