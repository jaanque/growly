import React from 'react';
import './AboutUsSection.css'; // Crearemos este archivo CSS

const AboutUsSection = () => {
  return (
    <section className="about-us-section container" id="about-us-section"> {/* Añadido ID */}
      <div className="about-us-content">
        <h2>Sobre ParkFast</h2>
        <p>
          En ParkFast, revolucionamos la forma en que encuentras y gestionas el aparcamiento.
          Nuestra misión es hacer que el estacionamiento sea más accesible, asequible y sencillo
          para todos, en cualquier momento y lugar.
        </p>
        <p>
          Fundada por un equipo de entusiastas de la tecnología y urbanistas, entendemos los
          desafíos del aparcamiento en las ciudades modernas. Por eso, hemos desarrollado una
          plataforma intuitiva que conecta a conductores con plazas de parking disponibles,
          optimizando el uso del espacio y ahorrando tiempo y dinero a nuestros usuarios.
        </p>
        {/* Opcional: Se podrían añadir subsecciones como "Nuestro Equipo" o "Nuestros Valores" */}
        {/*
        <h3>Nuestro Compromiso</h3>
        <ul>
          <li>Innovación Constante</li>
          <li>Transparencia en Precios</li>
          <li>Soporte al Cliente Excepcional</li>
          <li>Sostenibilidad y Optimización de Recursos</li>
        </ul>
        */}
      </div>
      <div className="about-us-image">
        {/* Aquí podría ir una imagen representativa de la empresa, equipo o concepto */}
        {/* <img src="/path/to/your-image.jpg" alt="Sobre ParkFast" /> */}
        <div className="image-placeholder">
          <p>Imagen Representativa</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
