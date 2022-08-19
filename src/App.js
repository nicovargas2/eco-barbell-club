import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import TrainWithUs from './components/pages/TrainWithUs';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/trainwithus" element={<TrainWithUs />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
