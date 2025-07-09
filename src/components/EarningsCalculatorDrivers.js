import React, { useState, useEffect } from 'react';
import './EarningsCalculatorDrivers.css';

const EarningsCalculatorDrivers = () => {
  const [hoursPerDay, setHoursPerDay] = useState(8); // Default value
  const [daysPerMonth, setDaysPerMonth] = useState(20); // Default value
  const [estimatedGross, setEstimatedGross] = useState(null);
  const [estimatedNet, setEstimatedNet] = useState(null);

  const ESTIMATED_HOURLY_RATE = 15; // Example: €15 per hour
  const CARFLI_COMMISSION_RATE = 0.15; // 15%

  // Calculate earnings whenever slider values change
  useEffect(() => {
    const hours = parseFloat(hoursPerDay);
    const days = parseFloat(daysPerMonth);

    if (isNaN(hours) || isNaN(days) || hours <= 0 || days <= 0) {
      setEstimatedGross(null);
      setEstimatedNet(null);
      return;
    }

    const gross = hours * days * ESTIMATED_HOURLY_RATE;
    const net = gross * (1 - CARFLI_COMMISSION_RATE);

    setEstimatedGross(gross.toFixed(2));
    setEstimatedNet(net.toFixed(2));
  }, [hoursPerDay, daysPerMonth]);


  // No form submission needed if calculation is live with useEffect
  // const handleCalculateEarnings = (e) => { ... };

  return (
    <div className="calculator-section driver-calculator">
      <div className="calculator-content">
        <h2>Driver Earnings Estimator</h2>
        <p className="calculator-description">
          Estimate your potential earnings as a Carfli driver. Adjust the sliders for your expected driving hours and days.
        </p>
        {/* Removed form tag as calculation is now live */}
        <div className="calculator-form">
          <div className="form-group">
            <label htmlFor="hoursPerDay">Hours of driving per day: <span className="slider-value-display">{hoursPerDay} hrs</span></label>
            <input
              type="range"
              id="hoursPerDay"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              min="1"
              max="16" // Max 16 hours
              step="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="daysPerMonth">Days per month: <span className="slider-value-display">{daysPerMonth} days</span></label>
            <input
              type="range"
              id="daysPerMonth"
              value={daysPerMonth}
              onChange={(e) => setDaysPerMonth(e.target.value)}
              min="1"
              max="30" // Max 30 days
              step="1"
            />
          </div>
          {/* Calculate button might be removed if live calculation is preferred */}
          {/* <button type="button" onClick={handleLiveCalculationTrigger} className="calculate-button">Calculate</button> */}
        </div>

        {estimatedGross !== null && estimatedNet !== null && (
          <div className="results-output">
            <h3>Estimated Monthly Earnings:</h3>
            <p><strong>Estimated Gross Earnings:</strong> €{estimatedGross}</p>
            <p><strong>Estimated Net Earnings (after Carfli's 15% commission):</strong> €{estimatedNet}</p>
            <p className="results-note">
              Note: This is an estimation based on an average hourly rate of €{ESTIMATED_HOURLY_RATE}/hr and average city demand. Actual earnings may vary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarningsCalculatorDrivers;
