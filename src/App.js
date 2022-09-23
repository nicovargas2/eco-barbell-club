import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import TrainWithUs from './components/pages/TrainWithUs';



function App() {
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

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/trainwithus" element={<TrainWithUs />} />
        <Route path='/external-link-1' element={<RedirectPage1 />} />
        <Route path='/external-link-2' element={<RedirectPage2 />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
hacer fondo como la de home, para train with us
y poner la imagen grande de ECO

ahi poner la filosofia y demas, hacer un cuadro con transparencia,
y letras a tono

abajo poner fotos de los 3 entrenadores con detalles
fondo a determinar

--
en el footer meter logo de pitbull certified
*/