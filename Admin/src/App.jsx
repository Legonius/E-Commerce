import React from "react";
import Navbar from "./components/Navbar";
import Sidebars from "./components/Sidebars";

const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <Navbar />
      <div className="w-full flex">
        <Sidebars />
      </div>
    </div>
  );
};

export default App;
