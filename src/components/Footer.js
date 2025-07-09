import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content-wrapper"> {/* Added a wrapper for better structure */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Carfli</h3>
            <p>Drive The Future.</p>
            {/* Placeholder for a small logo or brand statement */}
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#lead-form-section">Join Now</a></li> {/* Link to lead form */}
              <li><a href="#faq-section">FAQ</a></li> {/* Assuming FAQ section will have id="faq-section" */}
              <li><a href="#roadmap-section">Roadmap</a></li> {/* Assuming Roadmap section will have id="roadmap-section" */}
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li> {/* Placeholder link */}
              <li><a href="/terms-of-service">Terms of Service</a></li> {/* Placeholder link */}
              <li><a href="/legal-notice">Legal Notice</a></li> {/* Placeholder link */}
            </ul>
          </div>
          <div className="footer-contact-social">
            <h4>Contact & Social</h4>
            <p>Email: <a href="mailto:contact@carfli.com">contact@carfli.com</a></p>
            <div className="footer-social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Carfli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
