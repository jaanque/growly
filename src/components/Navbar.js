import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // Lógica para el menú móvil (placeholder)
  const handleMenuToggle = () => {
    // Aquí se manejaría la visibilidad del menú en móviles
    console.log("Menu toggled");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">ParkFast</a>
      </div>
      <div className="navbar-search">
        {/* <input type="text" placeholder="Buscar parkings..." /> */}
      </div>
      <div className="navbar-links">
        <a href="#features">Características</a>
        <a href="#pricing">Precios</a>
        <a href="#about-us-section">Nosotros</a> {/* Suponiendo ID de AboutUsSection */}
        <a href="#contact-section">Contacto</a>
        <button className="navbar-button login-button">Iniciar Sesión</button>
        <button className="navbar-button signup-button">Registrarse</button>
      </div>
      <div className="navbar-menu-icon" onClick={handleMenuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
