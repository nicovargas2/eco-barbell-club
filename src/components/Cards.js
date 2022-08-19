import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
          <h1>Eventos donde participamos</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/competicion3.jpg'
                  text='Lee el resumen de la última competición!'
                  label='Nuevo!'
                  path='/events'
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default Cards;