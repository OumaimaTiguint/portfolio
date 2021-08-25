import React from 'react';
import Intro from './components/intro';
import About from './components/about';
import Footer from './components/footer';
import Projects from './components/projects';
import Contact from './components/contact';
import { useTranslation } from "react-i18next";
//import { motion, useViewportScroll } from "framer-motion";
import './App.css';

function App() {
  const { i18n } = useTranslation();
  //const { scrollYProgress } = useViewportScroll()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="container">
        <div className="top">
          <p className="oumaima">Oumaima</p>
          <div className="lng-btns">
            <button className="lang" onClick={() => changeLanguage("fr")}>Fr</button>
            <button className="lang" onClick={() => changeLanguage("en")}>En</button>
          </div>
        </div>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
