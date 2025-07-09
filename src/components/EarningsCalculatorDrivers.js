import React, { useState } from 'react';
import './EarningsCalculatorDrivers.css';

const EarningsCalculatorDrivers = () => {
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [daysPerMonth, setDaysPerMonth] = useState('');
  const [estimatedGross, setEstimatedGross] = useState(null);
  const [estimatedNet, setEstimatedNet] = useState(null);

  const ESTIMATED_HOURLY_RATE = 15; // Example: €15 per hour
  const CARFLI_COMMISSION_RATE = 0.15; // 15%

  const handleCalculateEarnings = (e) => {
    e.preventDefault();
    const hours = parseFloat(hoursPerDay);
    const days = parseFloat(daysPerMonth);

    if (isNaN(hours) || isNaN(days) || hours <= 0 || days <= 0) {
      setEstimatedGross(null);
      setEstimatedNet(null);
      // Optionally, show an error message to the user
      return;
    }

    const gross = hours * days * ESTIMATED_HOURLY_RATE;
    const net = gross * (1 - CARFLI_COMMISSION_RATE);

    setEstimatedGross(gross.toFixed(2));
    setEstimatedNet(net.toFixed(2));
  };

  return (
    <div className="calculator-section driver-calculator">
      <div className="calculator-content">
        <h2>Driver Earnings Estimator</h2>
        <p className="calculator-description">
          Estimate your potential earnings as a Carfli driver. Enter your expected driving hours and days.
        </p>
        <form onSubmit={handleCalculateEarnings} className="calculator-form">
          <div className="form-group">
            <label htmlFor="hoursPerDay">Hours of driving per day:</label>
            <input
              type="number"
              id="hoursPerDay"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              placeholder="e.g., 8"
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="daysPerMonth">Days per month:</label>
            <input
              type="number"
              id="daysPerMonth"
              value={daysPerMonth}
              onChange={(e) => setDaysPerMonth(e.target.value)}
              placeholder="e.g., 20"
              min="1"
              required
            />
          </div>
          <button type="submit" className="calculate-button">Calculate</button>
        </form>

        {estimatedGross !== null && estimatedNet !== null && (
          <div className="results-output">
            <h3>Estimated Earnings:</h3>
            <p><strong>Estimated Gross Earnings:</strong> €{estimatedGross}</p>
            <p><strong>Estimated Net Earnings (after Carfli's 15% commission):</strong> €{estimatedNet}</p>
            <p className="results-note">
              Note: This is an estimation based on an average hourly rate of €{ESTIMATED_HOURLY_RATE} and average city demand. Actual earnings may vary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarningsCalculatorDrivers;
