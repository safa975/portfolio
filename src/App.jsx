import React from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/pages/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
