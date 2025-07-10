import React from 'react';
import './HeroSection.css'; // Crearemos este archivo CSS más tarde

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Adaptaremos el tag "NEW DROPS WEEKLY" */}
        <span className="hero-tag">ENCUENTRA TU SITIO IDEAL</span>
        <h1>Alquila tu plaza de parking ideal a precios increíbles</h1>
        <p>
          Descubre miles de plazas de aparcamiento disponibles cerca de ti.
          Ahorra tiempo y dinero con ParkFast.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Buscar Parking Ahora</button>
          <button className="hero-button secondary">Ver Planes</button>
        </div>
      </div>
      {/* Podríamos añadir aquí los iconos flotantes como en la imagen de referencia */}
      {/* <div className="hero-background-icons">
        <span>🚗</span> <span>🅿️</span> <span>📍</span> <span>💰</span>
      </div> */}
    </section>
  );
};

export default HeroSection;
