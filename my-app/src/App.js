// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />               {/* Home page route */}
        <Route path="/appointment" element={<Appointment />} /> {/* Appointments page route */}
      </Routes>
    </Router>
  );
}

export default App;
