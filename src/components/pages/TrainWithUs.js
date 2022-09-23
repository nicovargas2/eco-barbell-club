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
              está vinculada con los valores centrales. La misión de una organización es una 
              frase concisa, con foco “interno”, de la razón de la existencia de la organización, 
              el propósito básico hacia el que apuntan sus actividades, y los valores que guían 
              las actividades de sus empleados.</p>
          </div>
          <div>
            <h1>Visión</h1>
            <p>La visión es la situación en la que se pretende que se encuentre la organización 
              en un futuro a largo plazo. La visión es “externa”, orientada al mercado, y debería 
              expresar de una manera colorida y visionaria cómo quiere la organización ser 
              ercibida por el mundo. </p>
          </div>
          <div >
            <h1>Objetivo</h1>
            <p>El objetivo es la declaración que realiza la organización para enunciar de 
              manera cualitativa y cuantitativa lo que se propone lograr en el futuro. Es 
              la definición concreta de la misión y la visión.</p>
          </div>
          <div >
            <h1>Filosofía</h1>
            <p>La filosofía empresarial es un conjunto de principios y creencias que guían 
              todas las decisiones de una organización. Su objetivo es sentar las bases sobre 
              las que un negocio construirá sus productos y relaciones. Puede registrarse en 
              un documento escrito o ser una práctica establecida en tu cultura organizacional</p>
          </div>

        </div>


      </div>
      <Trainers />
    </>
  )
}

export default TrainWithUs

