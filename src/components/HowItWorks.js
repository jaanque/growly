import React from 'react';
import './HowItWorks.css';
import { FaCar, FaPiggyBank, FaUserTie, FaRobot } from 'react-icons/fa'; // New icons

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="how-it-works-content">
        <h2>How Carfli Works</h2> {/* Updated title */}
        <p className="explanation-text">
          Discover the simple steps to engage with Carfli, whether you want to travel, invest, or drive.
        </p>

        <div className="steps-grid">
          <div className="step-item">
            <div className="step-icon">
              <FaCar />
            </div>
            <h3 className="step-title">1. Travel Smart</h3>
            <p className="step-description">
              Experience rides in our 100% electric Tesla vehicles at fair and transparent prices. Enjoy premium comfort and contribute to a greener city.
            </p>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <FaPiggyBank />
            </div>
            <h3 className="step-title">2. Invest & Earn</h3>
            <p className="step-description">
              Become a co-owner of our vehicles. Invest in the Carfli fleet and generate passive income as the cars operate and serve passengers.
            </p>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <FaUserTie />
            </div>
            <h3 className="step-title">3. Drive & Prosper</h3>
            <p className="step-description">
              Join our team of professional drivers. Benefit from lower commission rates compared to traditional services and be part of an innovative mobility solution.
            </p>
          </div>
        </div>

        <div className="future-vision">
          <FaRobot className="future-icon"/>
          <h4>Our Vision: The Road to Full Autonomy</h4>
          <p>
            Carfli is committed to pioneering the future of urban transport. We are progressively integrating advanced autonomous driving technology, aiming for a future where our entire fleet operates with complete self-driving capabilities. This will enhance safety, efficiency, and accessibility for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
