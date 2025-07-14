import React from 'react';
import './Footer.css';
import { ReactComponent as FacebookIcon } from '../../resources/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../resources/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../resources/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../resources/icons/linkedin.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column about-column">
          <h4>Growly</h4> {/* Or your actual company name/logo */}
          <p>
            Connectem pagesos i consumidors per vendre excedents frescos a preus reduïts, evitant el malbaratament i promovent un consum més sostenible i econòmic.
          </p>
          {/* Optional: Small logo image here */}
          {/* <img src="/path-to-your-logo-small.png" alt="Growly Logo" className="footer-logo" /> */}
        </div>

        <div className="footer-column links-column">
          <h4>Empresa</h4>
          <ul>
          <li><a href="#hero">Inici</a></li>
          <li><a href="#about">Sobre Nosaltres</a></li>
          <li><a href="#why-growly">Per què Growly</a></li>
          <li><a href="#statistics">Estadístiques</a></li>
          <li><a href="#contact-form-section">Contacte</a></li>
          </ul>
        </div>

        <div className="footer-column links-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">Mapa del Lloc</a></li>
          </ul>
        </div>

        <div className="footer-column links-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Política de Privacitat</a></li>
            <li><a href="#">Termes del Servei</a></li>
            <li><a href="#">Política de Cookies</a></li>
            <li><a href="#">Accessibilitat</a></li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4>Contacte</h4>
          <p>
            <a href="tel:+34000000000">+34 621 203 854</a><br />
            <a href="mailto:info@growly.app">hola@grownly.cat</a>
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Growly. Tots els drets reservats.</p>
      </div>
    </footer>
  );
};

export default Footer;
