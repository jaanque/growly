import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="App-content">
      <div className="App-left">
        <img
          draggable="false"
          src="https://i.postimg.cc/KYKQVY1B/image-2.webp"
          alt="Logo de la aplicación"
          className="App-logo"
        />
        <h1 className="App-title">Growly - Menjar responsable</h1>
        <p className="App-subtitle">
          Connectem pagesos i consumidors per vendre excedents frescos a preus reduïts, evitant el malbaratament i promovent un consum més sostenible i econòmic.
        </p>
        <br />
        <div className="App-buttons">
          <button className="App-cta">
            Comença Ara
          </button>
          <div className="App-store-section">
            <div className="App-store-buttons">
              <a href="#" className="App-store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#" className="App-store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
            </div>
            <p className="App-store-text">(Pròximament)</p>
          </div>
        </div>
      </div>

      <div className="App-right">
        <img
          draggable="false"
          src="https://i.postimg.cc/2jqmwdjS/20250711-0642-Agricultor-en-Colina-remix-01jzvwm9b9ebp88vkwvtj3m4th.png"
          alt="Imagen de la aplicación"
          className="App-image"
        />
      </div>
    </div>
  );
}

export default Hero;
