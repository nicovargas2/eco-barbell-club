import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div>
            <img className='footer-logo'
              alt='Eco logo'
              src='images/LOGO FINAL 6 png.png' />
          </div>
          <div>
            <h2 className='footer-link-title'>Seguinos: &nbsp; 
            <Link
              className='social-icon-link'
              to="/external-link-1"
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>
            </h2>
          </div>
          <div>
            <h2 className='footer-link-title'>Visitanos: &nbsp; 
            <Link
              className='social-icon-link'
              to="/external-link-2"
              target='_blank'
              rel="noreferrer"
              aria-label='Location'>
              <i class="fas fa-map-marked-alt"></i>
            </Link>
            </h2>
          </div>
          
        </div>
      </div>
    </div >
  );
}

export default Footer;
