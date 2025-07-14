import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Accept isLogoInNavbar as a prop
const Navbar = ({ isLogoInNavbar }) => {
  const [logoVisibleClass, setLogoVisibleClass] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isLogoInNavbar) {
      // Timeout to allow the element to be in the DOM before adding the class
      // This ensures the transition plays.
      const timer = setTimeout(() => {
        setLogoVisibleClass('visible');
      }, 50); // Small delay
      return () => clearTimeout(timer);
    } else {
      setLogoVisibleClass('');
    }
  }, [isLogoInNavbar]);

  const navClassName = `site-navbar ${isLogoInNavbar ? 'floating' : ''} ${isMenuOpen ? 'menu-open' : ''}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // TODO: Implement active link highlighting based on scroll position in a later phase if desired.
  return (
    <nav className={navClassName}>
      <div className="navbar-container">
        <div className="navbar-logo-placeholder">
          {isLogoInNavbar && (
            <img
              src="https://i.postimg.cc/KYKQVY1B/image-2.webp" // Same src as Hero logo
              alt="Growly Logo in Navbar"
              className={`navbar-logo ${logoVisibleClass}`} // Apply visible class
            />
          )}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="navbar-cta-container">
          <a href="#contact-form-section" className="navbar-cta-button">Contacta'ns</a>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Inici</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nosaltres</a></li>
          <li><a href="#why-growly" onClick={() => setIsMenuOpen(false)}>Per què Growly</a></li>
          <li><a href="#statistics" onClick={() => setIsMenuOpen(false)}>Estadístiques</a></li>
          <li><a href="#contacto-form" onClick={() => setIsMenuOpen(false)}>Contacte</a></li>
          { /*
          <li><a href="#how-to-use">Com Utilitzar</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#trusted-by">Confien en Nosaltres</a></li>
          */ }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
