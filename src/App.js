import React, { useRef } from "react";
import "./App.css";

import About from "./component/About";
import Fooder from "./component/Fooder";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  const footerRef = useRef(null);

  // Function to scroll to the footer
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <NavBar onContactClick={scrollToFooter} />
      <Header onContactClick={scrollToFooter} />
      <About />
      <Skills />
      <Projects />
      <div ref={footerRef}>
        <Fooder />
      </div>
    </div>
  );
}

export default App;
