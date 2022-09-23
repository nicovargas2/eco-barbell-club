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

/*

  // Redirect Page
const RedirectPage1 = () => {
  useEffect(() => {
    window.location.replace('https://www.instagram.com/ecobarbellclub/?hl=es-la');
  }, [])

  return <div>
    <h3>Redirecting...</h3>
  </div>
}


const RedirectPage2 = () => {
  useEffect(() => {
    window.location.replace('https://goo.gl/maps/CCLG6m29DvGzsGE16');
  }, [])

  return <div>
    <h3>Redirecting...</h3>
  </div>
}

        <Route path='/external-link-1' element={<RedirectPage1 />} />
        <Route path='/external-link-2' element={<RedirectPage2 />} />
*/