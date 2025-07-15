import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className="App-content About-section">
      {/* Canviem l'ordre aquí: Primer el contenidor de la imatge, després el del text */}
      <div className="App-right"> {/* Contenidor per la imatge, reutilitzant la classe original per l'estil */}
        <img
          draggable="false"
          src="https://i.postimg.cc/L5GkPckf/20250711-0803-Carga-de-Productos-Frescos-remix-01jzw177xpf7js09fhjznvrsph.png"
          alt="Descripció de la imatge per a Què es Growly"
          className="App-image About-section-image" /* Combinem les classes */
        />
      </div>
      <div className="App-left About-text-container"> {/* Contenidor pel text, amb una nova classe per estils específics si cal */}
        <h1 className="App-title">{t('about.title')}</h1>
        <p className="App-subtitle">
          {t('about.p1')}
        </p>
        <p className="App-subtitle">
          {t('about.p2')}
        </p>
        <p className="App-subtitle">
          {t('about.p3')}
        </p>
        <br />
        <button className="App-button">{t('about.button')}</button>
      </div>
    </div>
  );
}

export default About;
