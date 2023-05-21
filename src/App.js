import React from 'react';
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
