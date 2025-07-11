import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2 className="how-it-works-title">¿Cómo Funciona ParkMi?</h2>
      <div className="how-it-works-steps timeline">

        {/* Paso 1 */}
        <div className="step step-on-timeline">
          <div className="step-icon-container">
            {/* Icono SVG temporal - reemplazar con el real */}
            <svg className="step-icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <span className="step-number">Paso 1</span>
          <h3 className="step-title">Busca tu Destino</h3>
          <p className="step-description">
            Introduce la dirección o lugar al que te diriges y ParkMi te mostrará los parkings cercanos disponibles.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="step step-on-timeline">
          <div className="step-icon-container">
            {/* Icono SVG temporal - reemplazar con el real */}
            <svg className="step-icon" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
            </svg>
          </div>
          <span className="step-number">Paso 2</span>
          <h3 className="step-title">Elige y Reserva</h3>
          <p className="step-description">
            Compara opciones por precio, distancia y servicios. Selecciona tu plaza ideal y resérvala en segundos.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="step step-on-timeline">
          <div className="step-icon-container">
            {/* Icono SVG temporal - reemplazar con el real */}
            <svg className="step-icon" viewBox="0 0 24 24">
               <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10-4h2v2h-2zm-4 0h2v2h-2z"/>
            </svg>
          </div>
          <span className="step-number">Paso 3</span>
          <h3 className="step-title">Aparca Fácilmente</h3>
          <p className="step-description">
            Sigue las indicaciones hasta tu plaza reservada y accede sin complicaciones. ¡Disfruta de tu tiempo!
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
