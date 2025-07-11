import React from 'react';
import './About.css';

function About() {
  return (
    <div className="App-content About-section">
      {/* Canviem l'ordre aquí: Primer el contenidor de la imatge, després el del text */}
      <div className="App-right"> {/* Contenidor per la imatge, reutilitzant la classe original per l'estil */}
        <img
          draggable="false"
          src="https://i.postimg.cc/L5GkPckf/20250711-0803-Carga-de-Productos-Frescos-remix-01jzw177xpf7js09fhjznvrsph.png"
          alt="Descripció de la imatge per a Què es Grobly"
          className="App-image About-section-image" /* Combinem les classes */
        />
      </div>
      <div className="App-left About-text-container"> {/* Contenidor pel text, amb una nova classe per estils específics si cal */}
        <h1 className="App-title">Què es Grobly?</h1>
        <p className="App-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="App-subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
