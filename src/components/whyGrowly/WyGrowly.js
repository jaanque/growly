import React from 'react';
import './WhyGrowly.css';

function WhyGrowly() {
  return (
    <div id="why-growly" className="App-content WhyGrowly-section">
      <div className="App-left">
        <div className="WhyGrowly-text-container">
          <h1 className="App-title">Per què Growly?</h1>
          <ul className="App-list">
            <li>Facilita el seguiment de tasques i projectes.</li>
            <li>Millora la col·laboració en equip.</li>
            <li>Augmenta la productivitat personal i del grup.</li>
            <li>Ofereix una interfície intuïtiva i fàcil d'usar.</li>
            <li>Permet personalitzar fluxos de treball segons les teves necessitats.</li>
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
