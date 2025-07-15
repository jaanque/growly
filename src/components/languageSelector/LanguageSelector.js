import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ca');

  const languages = [
    { code: 'ca', name: 'CAT', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/1200px-Flag_of_Catalonia.svg.png' },
    { code: 'es', name: 'ESP', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png' },
    { code: 'eu', name: 'EUS', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg' },
    { code: 'gl', name: 'GAL', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Galicia.svg/1200px-Flag_of_Galicia.svg.png' },
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
