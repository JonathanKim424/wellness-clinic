import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Homepage, Services, Contact } from './pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;