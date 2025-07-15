import React from 'react';
import './Footer.css';
import { ReactComponent as FacebookIcon } from '../../resources/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../resources/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../resources/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../resources/icons/linkedin.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column about-column">
          <h4>Growly</h4> {/* Or your actual company name/logo */}
          <p>
            {t('footer.about')}
          </p>
          {/* Optional: Small logo image here */}
          {/* <img src="/path-to-your-logo-small.png" alt="Growly Logo" className="footer-logo" /> */}
        </div>

        <div className="footer-column links-column">
          <h4>{t('footer.company')}</h4>
          <ul>
          <li><a href="#hero">{t('navbar.home')}</a></li>
          <li><a href="#about">{t('navbar.about')}</a></li>
          <li><a href="#why-growly">{t('navbar.why')}</a></li>
          <li><a href="#statistics">{t('navbar.statistics')}</a></li>
          <li><a href="#contact-form-section">{t('navbar.contact')}</a></li>
          </ul>
        </div>

        <div className="footer-column links-column">
          <h4>{t('footer.resources')}</h4>
          <ul>
            <li><a href="#contacto-form">{t('navbar.contact_us')}</a></li>
            <li><a href="#">{t('footer.sitemap')}</a></li>
          </ul>
        </div>

        { /* Optional: Add more columns for additional links or information
        <div className="footer-column links-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Política de Privacitat</a></li>
            <li><a href="#">Termes del Servei</a></li>
            <li><a href="#">Política de Cookies</a></li>
            <li><a href="#">Accessibilitat</a></li>
          </ul>
        </div>
        */ }

        <div className="footer-column contact-column">
          <h4>{t('footer.contact')}</h4>
          <p>
            <a href="tel:+34000000000">+34 621 203 854</a><br />
            <a href="mailto:info@growly.app">hola@grownly.cat</a>
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Growly. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
