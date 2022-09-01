import React from 'react';
import '../../App.css';
import './Events.css';

function Events() {
  return (
    <>
      <div className='events-container'>

        <div className='events-title'>
          <h1>Eventos</h1>
        </div>

        <div className='event-flex-container'>
          <div>
          <img
              alt='NombreApellidoCompetidor'
              src='public/images/competicion7.png' />
          </div>
          <div>
            2
          </div>
        </div>
      </div>
    </>
  )
}

export default Events