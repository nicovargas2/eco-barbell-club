import React from 'react';
import '../../App.css';
import '../pages/TrainWithUs.css';
import Trainers from '../Trainers';

function TrainWithUs() {
  return (
    <>
      <div className='TrainWithUs-container'>
        <div>
          <div>
            <h1>Misión</h1>
            <p>La misión es cumplir con la finalidad para la cual fue creada la organización y 
              está vinculada con los valores centrales.</p>
          </div>
          <div>
            <h1>Visión</h1>
            <p>La visión es la situación en la que se pretende que se encuentre la organización 
              en un futuro a largo plazo. </p>
          </div>
          <div >
            <h1>Objetivo</h1>
            <p>El objetivo es la declaración que realiza la organización a lo que se propone lograr en el futuro.</p>
          </div>
          <div >
            <h1>Filosofía</h1>
            <p>Es un conjunto de principios y creencias que guían todas las decisiones de la organización. Sienta las bases sobre 
              las que se construirá sus productos y/o relaciones.</p>
          </div>

        </div>


      </div>
      <Trainers />
    </>
  )
}

export default TrainWithUs

