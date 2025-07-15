import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ca', name: 'CAT', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/ad.svg' },
    { code: 'es', name: 'ESP', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/es.svg' },
    { code: 'eu', name: 'EUS', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/eu.svg' },
    { code: 'gl', name: 'GAL', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/ga.svg' },
  ];

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button className="language-selector-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={languages.find(l => l.code === 'ca').flag} alt="cat" className="flag-icon" />
      </button>
      {isOpen && (
        <ul className="language-selector-dropdown">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
              <img src={lang.flag} alt={lang.name} className="flag-icon" />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
