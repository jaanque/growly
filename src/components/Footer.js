import React from 'react';
import './Footer.css';

// Iconos SVG para Redes Sociales
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">ParkFast</a>
          <p>Tu solución inteligente para aparcar.</p>
        </div>
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#features">Características</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#about-us-section">Nosotros</a></li>
            <li><a href="#contact-section">Contacto</a></li>
            {/* <li><a href="/terminos">Términos y Condiciones</a></li> */}
            {/* <li><a href="/privacidad">Política de Privacidad</a></li> */}
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><IconTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram /></a>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: <a href="mailto:info@parkfast.com">info@parkfast.com</a></p>
          <p>Teléfono: <a href="tel:+34123456789">+34 123 456 789</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ParkFast. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
