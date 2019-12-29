import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
