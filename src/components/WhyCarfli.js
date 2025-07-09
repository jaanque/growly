import React from 'react';
import './WhyCarfli.css';
import { FaRocket, FaUsers, FaLeaf } from 'react-icons/fa';

const WhyCarfli = () => {
  return (
    <div className="why-carfli-section">
      <div className="why-carfli-content">
        <h2>Por Qué Carfli</h2>
        <p className="explanation-text">
          Principales beneficios que nos distinguen en el futuro de la movilidad
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <FaRocket />
            </div>
            <h3 className="feature-title">Innovative</h3>
            <p className="feature-description">Conducirás el futuro de la movilidad con coches autónomos</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3 className="feature-title">Accessible</h3>
            <p className="feature-description">Inversión participativa sin comisiones ni intermediarios</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3 className="feature-title">Sustainable</h3>
            <p className="feature-description">Contribuye a un futuro más verde y eficiente con vehículos eléctricos autónomos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCarfli;
