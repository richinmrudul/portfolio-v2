import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import EasterEggs from "./components/EasterEggs";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <EasterEggs />
    </div>
  );
};

export default App;
