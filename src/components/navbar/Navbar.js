import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Accept isLogoInNavbar as a prop
const Navbar = ({ isLogoInNavbar }) => {
  const [logoVisibleClass, setLogoVisibleClass] = useState('');

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

  const navClassName = `site-navbar ${isLogoInNavbar ? 'floating' : ''}`;

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
        <ul className="nav-links">
          <li><a href="#hero">Inici</a></li>
          <li><a href="#about">Sobre Nosaltres</a></li>
          <li><a href="#why-growly">Per què Growly</a></li>
          <li><a href="#how-to-use">Com Utilitzar</a></li>
          <li><a href="#trusted-by">Confien en Nosaltres</a></li>
        </ul>
        <div className="navbar-cta-container">
          <a href="#contact-form-section" className="navbar-cta-button">Contacta'ns</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
