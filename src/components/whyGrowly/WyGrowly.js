import React from 'react';
import './WhyGrowly.css';

function WhyGrowly() {
  return (
    <div id="why-growly" className="App-content WhyGrowly-section">
      <div className="App-left">
        <div className="WhyGrowly-text-container">
          <h1 className="App-title">Per què Growly?</h1>
          <ul className="App-list">
            <li>Porque detrás de cada cosecha hay esfuerzo, y no debería perderse.</li>
            <li>Porque si es de aquí, ¿para qué buscarlo fuera?</li>
            <li>Porque comer bien debería ser fácil, justo y posible.</li>
            <li>Porque hay otra forma de hacer las cosas.</li>
            <li>Porque lo que se cultiva con cariño, merece su destino.</li>
            <li>Porque esto va de personas, no de desperdicio.</li>
          </ul>
        </div>
      </div>
      <div className="App-right">
        <img
          draggable="false"
          src='https://i.postimg.cc/t4My9hNh/20250711-0956-Logo-Impreso-en-Bolsa-remix-01jzw7ndtyej5s6n3ez80rghjr.png'
          alt="Descripció de la imatge per a Per què Growly"
          className="App-image why-growly-image"
        />
      </div>
    </div>
  );
}

export default WhyGrowly;
