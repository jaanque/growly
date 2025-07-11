import React from 'react';
import './WhyGrowly.css';

function WhyGrowly() {
  return (
    <div className="App-content WhyGrowly-section">
      <div className="App-left WhyGrowly-text-container">
        <h1 className="App-title">Per què Growly?</h1>
        <ul className="App-list">
          <li>Facilita el seguiment de tasques i projectes.</li>
          <li>Millora la col·laboració en equip.</li>
          <li>Augmenta la productivitat personal i del grup.</li>
          <li>Ofereix una interfície intuïtiva i fàcil d'usar.</li>
          <li>Permet personalitzar fluxos de treball segons les teves necessitats.</li>
        </ul>
      </div>
      <div className="App-right">
        <img
          draggable="false"
          src="https://i.postimg.cc/5N8AwncT/DALL-E-2024-03-15-11-06-01-A-vibrant-and-dynamic-image-showcasing-teamwork-and-productivity-The-ima.png"
          alt="Descripció de la imatge per a Per què Growly"
          className="App-image WhyGrowly-section-image"
        />
      </div>
    </div>
  );
}

export default WhyGrowly;
