import React from 'react';
import './HowItWorks.css';
import { FaCoins, FaDollarSign, FaRoute } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="how-it-works-content">
        <h2>How It Works?</h2>
        <p className="explanation-text">
          Join the autonomous transport revolution in three simple steps.
        </p>

        <div className="steps-grid">
          <div className="step-item">
            <div className="step-icon">
              <FaCoins />
            </div>
            <h3 className="step-title">Invest</h3>
            <p className="step-description">
              Invest and gain co-ownership of cutting-edge autonomous vehicles.
            </p>
            <a href="#" className="step-cta">
              <span className="step-cta-text">Start Investing</span>
            </a>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <FaDollarSign />
            </div>
            <h3 className="step-title">Earn</h3>
            <p className="step-description">
              Receive passive income while vehicles operate throughout the city.
            </p>
            <a href="#" className="step-cta">
              <span className="step-cta-text">Be Part of the Future</span>
            </a>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <FaRoute />
            </div>
            <h3 className="step-title">Ride</h3>
            <p className="step-description">
              Enjoy driverless rides, cheaper and commission-free.
            </p>
            <a href="#" className="step-cta">
              <span className="step-cta-text">Start Your Journey</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
