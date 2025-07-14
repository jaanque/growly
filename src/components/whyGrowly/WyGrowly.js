import React from 'react';
import './WhyGrowly.css';

function WhyGrowly() {
  return (
    <div id="why-growly" className="App-content WhyGrowly-section">
      <div className="App-left">
        <div className="WhyGrowly-text-container">
          <h1 className="App-title">Per què Growly?</h1>
          <ul className="App-list">
            <li>Perquè darrere de cada collita hi ha esforç, i no s'hauria de perdre.</li>
            <li>Perquè si és d'aquí, per què buscar-ho fora?</li>
            <li>Perquè menjar bé hauria de ser fàcil, just i possible.</li>
            <li>Perquè hi ha una altra manera de fer les coses.</li>
            <li>Perquè el que es cultiva amb afecte, mereix el seu destí.</li>
            <li>Perquè això va de persones, no de malbaratament.</li>
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
