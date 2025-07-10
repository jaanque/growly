import React from 'react';
import './Footer.css'; // Crearemos este archivo CSS más tarde

const Footer = () => {
  return (
    <footer className="footer" id="contact">
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
            <li><a href="/terminos">Términos y Condiciones</a></li>
            <li><a href="/privacidad">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          {/* Aquí irían iconos de redes sociales */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: info@parkfast.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ParkFast. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
