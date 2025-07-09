import React from 'react';
import './WhyCarfli.css';
import { FaRocket, FaUsers, FaLeaf } from 'react-icons/fa';

const WhyCarfli = () => {
  return (
    <div className="why-carfli-section">
      <div className="why-carfli-content">
        <h2>Why Carfli?</h2>
        <p className="explanation-text">
          Key benefits that set us apart in the future of mobility.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <FaRocket />
            </div>
            <h3 className="feature-title">Innovative</h3>
            <p className="feature-description">You will drive the future of mobility with autonomous cars.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3 className="feature-title">Accessible</h3>
            <p className="feature-description">Participatory investment without commissions or intermediaries.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3 className="feature-title">Sustainable</h3>
            <p className="feature-description">Contribute to a greener and more efficient future with autonomous electric vehicles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCarfli;
