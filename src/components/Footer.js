import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <img className='logo__img' alt='Texto alterno' src='images/LOGO FINAL 6 png.png' />
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <h2>Seguinos!</h2>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;