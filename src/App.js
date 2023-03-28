import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './containers';
import { Homepage, Services, Pricing, Contact } from './pages';

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
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <div className='gradient__bg'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;