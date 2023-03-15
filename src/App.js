import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Header } from './containers';
import { Contact } from './pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
      </div>
    </Router>
  );
}

export default App;