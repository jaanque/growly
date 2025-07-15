import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ changeLanguage }) => {
  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('ca')}>CAT</button>
      <button onClick={() => changeLanguage('es')}>ESP</button>
      <button onClick={() => changeLanguage('eu')}>EUS</button>
      <button onClick={() => changeLanguage('gl')}>GAL</button>
    </div>
  );
};

export default LanguageSelector;
