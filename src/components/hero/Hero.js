import React from 'react';
import './Hero.css';

// Accept isLogoInNavbar and t as props
function Hero({ isLogoInNavbar, t }) {
  return (
    <div id="hero" className="App-content hero-section">
      <div className="App-left">
        <img
          draggable="false"
          src="https://i.postimg.cc/KYKQVY1B/image-2.webp"
          alt="Logo de la aplicación"
          // Add a class based on the prop for styling the transition
          className={`App-logo ${isLogoInNavbar ? 'App-logo-scrolled' : ''}`}
        />
        <h1 className="App-title">{t.title}</h1>
        <p className="App-subtitle">{t.subtitle}</p>
        <br />
        <div className="App-buttons">
          <button className="App-cta">
            {t.cta}
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
            <p className="App-store-text">{t.soon}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
