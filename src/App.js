import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './containers';
import { Homepage, Sauna, ColdPlunge, VitaminIvTherapy, Contact, About, Services } from './pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/sauna" element={<Sauna />}/>
          <Route path="/coldplunge" element={<ColdPlunge />}/>
          <Route path="/vitaminivtherapy" element={<VitaminIvTherapy />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;