import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
