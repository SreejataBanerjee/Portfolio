import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Papers from "./components/Papers";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Papers />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

export default App;
