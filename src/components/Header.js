import React from 'react';
import './Header.css';

const Header = () => {
  const handleScrollToLeadForm = (e) => {
    e.preventDefault();
    // The new lead capture form section will have the ID "lead-form-section"
    const leadFormSection = document.getElementById('lead-form-section');
    if (leadFormSection) {
      leadFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-section">
      <div className="text-content">
        <h1 className="header-title">
          Carfli - Drive The Future
        </h1>
        <p className="header-subtitle">
          Revolutionizing urban mobility with electric, co-owned vehicles, driving towards a fully autonomous future.
        </p>
        {/* Removed <br> tags for cleaner spacing, can be adjusted with CSS if needed */}
        <p className="header-description">
          Experience the freedom of fully autonomous travel while shaping the future of urban mobility. Gain co-ownership in a fleet of self-driving vehicles and receive earnings as they move through the city.
        </p>

        <a href="#lead-form-section" className="cta-button" onClick={handleScrollToLeadForm}>
          <svg className="cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Using a more generic "arrow down" or "join" icon might be better, placeholder for now */}
            <path d="M12 5V19M5 12L12 19L19 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="cta-text">Join Now</span>
        </a>
      </div>
      <div className="image-content">
        <div className="banner-container">
          <img
            src="https://i.ibb.co/xqYjG8N4/20250709-0419-Personas-de-Plastilina-Realista-remix-01jzpfjyqmfaescr92jx6bas71.png"
            alt="Banner"
            className="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
