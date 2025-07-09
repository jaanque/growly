import React from 'react';
import './TrustSignals.css';
import { FaShieldAlt, FaLeaf, FaUserCheck, FaStar } from 'react-icons/fa'; // Example icons

const TrustSignals = () => {
  const testimonials = [
    {
      quote: "Using Carfli's early access program has been a game-changer for my city commutes. The Teslas are amazing, and I love being part of this innovative journey!",
      name: "Alex P.",
      role: "Early Adopter"
    },
    {
      quote: "Investing in Carfli was a straightforward process. I'm excited about the potential of autonomous mobility and earning passive income.",
      name: "Sarah K.",
      role: "Seed Investor"
    },
    // Add a third placeholder if desired
    // {
    //   quote: "Driving for Carfli offers great flexibility and better commissions than other platforms I've tried.",
    //   name: "John D.",
    //   role: "Partner Driver"
    // }
  ];

  return (
    <div className="trust-signals-section">
      <div className="trust-content">
        <h2>Building Trust, Driving Forward</h2>
        <div className="signals-grid">
          {/* Testimonials Section */}
          <div className="testimonial-container">
            <h3>What Our Community Says (Placeholders)</h3>
            <div className="testimonials-list">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-author">- {testimonial.name}, <span>{testimonial.role}</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Badges and Logos Section */}
          <div className="badges-logos-container">
            <div className="badge-item">
              <FaLeaf className="badge-icon electric-icon" />
              <h4>100% Electric Fleet</h4>
              <p>Committed to a sustainable, zero-emission future with our all-electric Tesla vehicles.</p>
            </div>
            <div className="badge-item">
              <FaShieldAlt className="badge-icon security-icon" />
              <h4>Safety First Approach</h4>
              <p>Utilizing advanced technology and rigorous protocols to ensure the highest safety standards.</p>
            </div>
             <div className="badge-item">
              <FaUserCheck className="badge-icon partner-icon" />
              <h4>Verified Partners & Drivers</h4>
              <p>Working with trusted technology providers and rigorously vetted professional drivers.</p>
            </div>
            <div className="logos-placeholder">
              <h4>Future Partners & Alliances:</h4>
              <p>(Logos of tech providers, insurance partners, or city collaborations will appear here)</p>
              <div className="logo-examples">
                <span>[Partner Logo 1]</span>
                <span>[Partner Logo 2]</span>
                <span>[Partner Logo 3]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
