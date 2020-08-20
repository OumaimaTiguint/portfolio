import React from 'react';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Nabvar from './components/navbar';
import './App.css';

function App() {
  return (
    <>
      <Nabvar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
