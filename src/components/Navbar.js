import React from 'react';
import './Navbar.css'; // Crearemos este archivo CSS más tarde

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Podríamos usar un SVG o un texto como logo */}
        <a href="/">ParkFast</a>
      </div>
      <div className="navbar-search">
        {/* Opcional: Podríamos añadir una barra de búsqueda simple si se decide incluir */}
        {/* <input type="text" placeholder="Buscar parkings..." /> */}
      </div>
      <div className="navbar-links">
        <a href="#features">Características</a>
        <a href="#pricing">Precios</a>
        <a href="#contact">Contacto</a>
        {/* Adaptaremos los botones de la imagen de referencia */}
        <button className="navbar-button login-button">Iniciar Sesión</button>
        <button className="navbar-button signup-button">Registrarse</button>
      </div>
      <div className="navbar-menu-icon">
        {/* Icono de hamburguesa para móviles, podríamos usar un SVG o una librería de iconos */}
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
