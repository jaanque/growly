import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = ({ t }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>{t.text}</p>
      <button onClick={handleAccept}>{t.accept}</button>
    </div>
  );
};

export default CookieBanner;
