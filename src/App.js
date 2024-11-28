import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;