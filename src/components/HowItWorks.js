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
            <svg className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
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
            <svg className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 18.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/>
              <path d="M17 13h-2.5v-2.5H12v2.5H9.5v2h2.5v2.5H12v-2.5h2.5z" opacity=".3"/> {/* Efecto de selección */}
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
            <svg className="step-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
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
