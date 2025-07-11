import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // TODO: Implement active link highlighting based on scroll position in a later phase if desired.
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><a href="#hero">Inici</a></li>
          <li><a href="#about">Sobre Nosaltres</a></li>
          <li><a href="#why-growly">Per què Growly</a></li>
          <li><a href="#how-to-use">Com Utilitzar</a></li>
          <li><a href="#trusted-by">Confien en Nosaltres</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
