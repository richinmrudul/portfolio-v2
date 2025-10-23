import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
