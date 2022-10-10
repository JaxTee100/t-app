import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        
      </Routes>
     
    </Router>
  );
}

export default App;