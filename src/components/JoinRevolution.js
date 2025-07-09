import React from 'react';
import './JoinRevolution.css';

const JoinRevolution = () => {
  return (
    <div className="join-revolution-section">
      <div className="join-revolution-content">
        <h2>Únete a la Revolución</h2>
        <p className="explanation-text">
          Regístrate ahora y sé parte del futuro de la movilidad urbana
        </p>

        <form className="registration-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-text">I'm interested in co-owning a car</span>
            </label>
          </div>

          <button type="submit" className="join-cta-button">
            Join the Future Now
          </button>
        </form>

        <a href="#" className="learn-more-link">Learn More</a>
      </div>
    </div>
  );
};

export default JoinRevolution;
