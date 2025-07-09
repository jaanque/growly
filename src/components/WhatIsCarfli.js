import React from 'react';
import './WhatIsCarfli.css';
import { FaCar, FaLightbulb, FaChartLine } from 'react-icons/fa';

const WhatIsCarfli = () => {
  return (
    <div id="next-section" className="next-section">
      <div className="next-content">
        <h2>What is Carfli?</h2>
        <p className="explanation-text">
          Carfli is shaping the future of urban mobility with autonomous vehicles. Join us today, co-own self-driving cars, and earn as our fleet moves through the city. Together, we're building a smarter, more sustainable way to travel.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <FaCar />
            </div>
            <h3 className="feature-title">Self-Driving Cars</h3>
            <p className="feature-description">Experience fully autonomous vehicles designed for the future of transportation</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaLightbulb />
            </div>
            <h3 className="feature-title">Invest in the Fleet</h3>
            <p className="feature-description">Become a co-owner and help build the autonomous vehicle network</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3 className="feature-title">Earn as the Fleet Moves</h3>
            <p className="feature-description">Generate passive income as vehicles operate throughout the city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCarfli;
