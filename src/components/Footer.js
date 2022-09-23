import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div>
            <img className='footer-logo'
              alt='Eco logo'
              src='images/LOGO_FINAL_6.png' />
          </div>
          <div>
            <h2 className='footer-link-title'>Seguinos: &nbsp; 
            <a href='https://www.instagram.com/ecobarbellclub/?hl=es-la'
              className='social-icon-link'
              aria-label='Instagram'
              target='_blank'
              rel="noreferrer">
              <i class='fab fa-instagram' />
            </a>
            </h2>
          </div>
          <div>
            <h2 className='footer-link-title'>Visitanos: &nbsp; 
            <a href='https://goo.gl/maps/CCLG6m29DvGzsGE16'
              className='social-icon-link'
              target='_blank'
              rel="noreferrer"
              aria-label='Location'>
              <i class="fas fa-map-marked-alt"></i>
            </a>
            </h2>
          </div>
          
        </div>
      </div>
    </div >
  );
}

export default Footer;
