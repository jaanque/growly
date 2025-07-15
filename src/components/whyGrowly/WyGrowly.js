import React from 'react';
import './WhyGrowly.css';

function WhyGrowly({ t }) {
  return (
    <div id="why-growly" className="WhyGrowly-section">
      <div className="WhyGrowly-container">
        <div className="WhyGrowly-content">
          {/* Contenido de texto */}
          <div className="WhyGrowly-text-content">
            <div className="WhyGrowly-text-container">
              <h1 className="WhyGrowly-title">{t.title}</h1>
              <ul className="WhyGrowly-list">
                {t.reasons.map((reason, index) => (
                  <li key={index} className="WhyGrowly-list-item">
                    <div className="WhyGrowly-check-icon">
                      <svg viewBox="0 0 24 24" className="WhyGrowly-check-svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="WhyGrowly-reason-text">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen */}
          <div className="WhyGrowly-image-content">
            <div className="WhyGrowly-image-container">
              <div className="">
                <img
                  src="https://i.postimg.cc/t4My9hNh/20250711-0956-Logo-Impreso-en-Bolsa-remix-01jzw7ndtyej5s6n3ez80rghjr.png"
                  alt="Logo de Growly impreso en bolsa"
                  className="WhyGrowly-image"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyGrowly;