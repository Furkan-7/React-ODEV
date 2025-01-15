import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Hobbies />
      <SocialMedia />
    </div>
  );
}

export default App;
