import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ca');

  const languages = [
    { code: 'ca', name: 'CAT', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/ad.svg' },
    { code: 'es', name: 'ESP', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/es.svg' },
    { code: 'eu', name: 'EUS', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/eu.svg' },
    { code: 'gl', name: 'GAL', flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@6.6.6/flags/4x3/ga.svg' },
  ];

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const selectedLang = languages.find(l => l.code === selectedLanguage);

  return (
    <div className="language-selector">
      <button className="language-selector-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedLang.flag} alt={selectedLang.name} className="flag-icon" />
        <span>{selectedLang.name}</span>
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
