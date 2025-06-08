import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Projects */}
      <Projects />
      {/* Experiences */}
      <Experiences />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
