import React, { useState } from 'react';
import './LeadCaptureForm.css';

const LeadCaptureForm = () => {
  const [activeTab, setActiveTab] = useState('travel'); // 'travel', 'drive', 'invest'

  // State for Travel Tab
  const [travelEmail, setTravelEmail] = useState('');
  const [travelCity, setTravelCity] = useState('');

  // State for Drive Tab
  const [driveName, setDriveName] = useState('');
  const [driveEmail, setDriveEmail] = useState('');
  const [driveCity, setDriveCity] = useState('');
  const [driveAvailability, setDriveAvailability] = useState('');

  // State for Invest Tab
  const [investName, setInvestName] = useState('');
  const [investEmail, setInvestEmail] = useState('');
  const [investAmount, setInvestAmount] = useState('');
  const [investCity, setInvestCity] = useState('');

  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyConsent) {
      setSubmissionMessage('Please agree to the privacy policy before submitting.');
      return;
    }

    let leadData = {};
    if (activeTab === 'travel') {
      leadData = { type: 'Traveler', email: travelEmail, city: travelCity };
    } else if (activeTab === 'drive') {
      leadData = { type: 'Driver', name: driveName, email: driveEmail, city: driveCity, availability: driveAvailability };
    } else if (activeTab === 'invest') {
      leadData = { type: 'Investor', name: investName, email: investEmail, amount: investAmount, city: investCity };
    }

    // In a real app, you'd send this data to a backend.
    console.log('Lead Data:', leadData);
    setSubmissionMessage(`Thank you for your interest, ${leadData.name || 'User'}! We'll be in touch.`);

    // Reset form fields (optional)
    setTravelEmail(''); setTravelCity('');
    setDriveName(''); setDriveEmail(''); setDriveCity(''); setDriveAvailability('');
    setInvestName(''); setInvestEmail(''); setInvestAmount(''); setInvestCity('');
    setPrivacyConsent(false);
  };

  const renderFormFields = () => {
    if (activeTab === 'travel') {
      return (
        <>
          <div className="form-group">
            <label htmlFor="travelEmail">Email:</label>
            <input type="email" id="travelEmail" value={travelEmail} onChange={(e) => setTravelEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="travelCity">City:</label>
            <input type="text" id="travelCity" value={travelCity} onChange={(e) => setTravelCity(e.target.value)} required />
          </div>
        </>
      );
    } else if (activeTab === 'drive') {
      return (
        <>
          <div className="form-group">
            <label htmlFor="driveName">Name:</label>
            <input type="text" id="driveName" value={driveName} onChange={(e) => setDriveName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="driveEmail">Email:</label>
            <input type="email" id="driveEmail" value={driveEmail} onChange={(e) => setDriveEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="driveCity">City:</label>
            <input type="text" id="driveCity" value={driveCity} onChange={(e) => setDriveCity(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="driveAvailability">Hourly Availability (e.g., "Weekends", "20hrs/week"): </label>
            <input type="text" id="driveAvailability" value={driveAvailability} onChange={(e) => setDriveAvailability(e.target.value)} />
          </div>
        </>
      );
    } else if (activeTab === 'invest') {
      return (
        <>
          <div className="form-group">
            <label htmlFor="investName">Name:</label>
            <input type="text" id="investName" value={investName} onChange={(e) => setInvestName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="investEmail">Email:</label>
            <input type="email" id="investEmail" value={investEmail} onChange={(e) => setInvestEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="investAmount">Approximate Investment Amount (€):</label>
            <input type="text" id="investAmount" value={investAmount} onChange={(e) => setInvestAmount(e.target.value)} placeholder="e.g., 5000 or 10k-20k" />
          </div>
          <div className="form-group">
            <label htmlFor="investCity">City:</label>
            <input type="text" id="investCity" value={investCity} onChange={(e) => setInvestCity(e.target.value)} required />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="lead-capture-section" id="lead-form-section">
      <div className="lead-capture-content">
        <h2>Join Carfli - Get Involved!</h2>
        <p className="lead-capture-description">
          Whether you want to ride, drive, or invest, take the first step towards the future of mobility.
        </p>

        <div className="tabs-container">
          <button className={`tab-button ${activeTab === 'travel' ? 'active' : ''}`} onClick={() => setActiveTab('travel')}>
            Travel with Carfli
          </button>
          <button className={`tab-button ${activeTab === 'drive' ? 'active' : ''}`} onClick={() => setActiveTab('drive')}>
            Drive with Carfli
          </button>
          <button className={`tab-button ${activeTab === 'invest' ? 'active' : ''}`} onClick={() => setActiveTab('invest')}>
            Invest with Carfli
          </button>
        </div>

        <form onSubmit={handleSubmit} className="lead-form">
          {renderFormFields()}
          <div className="form-group privacy-consent">
            <input
              type="checkbox"
              id="privacyConsent"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              required
            />
            <label htmlFor="privacyConsent">
              I agree to Carfli's <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to be contacted.
            </label>
          </div>
          <button type="submit" className="submit-button">Submit Interest</button>
        </form>
        {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      </div>
    </div>
  );
};

export default LeadCaptureForm;
