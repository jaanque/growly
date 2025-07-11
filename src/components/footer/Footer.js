import React from 'react';
import './Footer.css';
// For a real project, you might use an icon library like react-icons
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
            <li><a href="#">Sobre Nosaltres</a></li>
            <li><a href="#">Carreres</a></li>
            <li><a href="#">Premsa</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column links-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Centre d'Ajuda</a></li>
            <li><a href="#">Contacta'ns</a></li>
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
            Carrer Fictici 123<br />
            08000 Barcelona, Espanya<br />
            <a href="tel:+34000000000">+34 000 000 000</a><br />
            <a href="mailto:info@growly.app">info@growly.app</a>
          </p>
          <div className="footer-social-icons">
            {/* Replace text with actual icons later */}
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
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
