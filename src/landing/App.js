import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <Hero />
      <Sidebar />
    </div>
  );
};

export default App;
