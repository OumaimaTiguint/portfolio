import React from 'react';
import Intro from './components/intro';
import About from './components/about';
import Footer from './components/footer';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
