import React, { useState } from 'react';
import './InvestmentCalculator.css'; // Will reuse or adapt general calculator styles

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [selectedTeslaModel, setSelectedTeslaModel] = useState('model3'); // Default model
  const [estimatedGrossReturn, setEstimatedGrossReturn] = useState(null);
  const [estimatedNetReturn, setEstimatedNetReturn] = useState(null);

  const TESLA_MODELS_COST = {
    model3: { name: 'Tesla Model 3', cost: 40000 },
    modelY: { name: 'Tesla Model Y', cost: 45000 },
    modelS: { name: 'Tesla Model S', cost: 75000 }, // Example
    modelX: { name: 'Tesla Model X', cost: 85000 }, // Example
  };
  // This is a highly simplified placeholder. Realistically, this would be a complex calculation.
  const AVG_MONTHLY_PROFIT_PER_FULL_VEHICLE_SHARE = 300; // Example: €300 profit per month for owning 1 full car
  const CARFLI_RETENTION_RATE = 0.20; // 20%

  const handleCalculateReturn = (e) => {
    e.preventDefault();
    const amount = parseFloat(investmentAmount);
    const modelData = TESLA_MODELS_COST[selectedTeslaModel];

    if (isNaN(amount) || amount <= 0 || !modelData) {
      setEstimatedGrossReturn(null);
      setEstimatedNetReturn(null);
      return;
    }

    // Calculate the fraction of a vehicle the investment represents
    const vehicleFraction = amount / modelData.cost;

    // Estimate gross return based on this fraction
    const grossReturn = vehicleFraction * AVG_MONTHLY_PROFIT_PER_FULL_VEHICLE_SHARE;
    const netReturn = grossReturn * (1 - CARFLI_RETENTION_RATE);

    setEstimatedGrossReturn(grossReturn.toFixed(2));
    setEstimatedNetReturn(netReturn.toFixed(2));
  };

  return (
    <div className="calculator-section investment-calculator"> {/* Note: Reusing .calculator-section from driver calc CSS for base styling */}
      <div className="calculator-content">
        <h2>Investment Return Estimator</h2>
        <p className="calculator-description">
          Estimate your potential monthly return by investing in Carfli's Tesla fleet.
        </p>
        <form onSubmit={handleCalculateReturn} className="calculator-form">
          <div className="form-group">
            <label htmlFor="investmentAmount">Amount to invest (€):</label>
            <input
              type="number"
              id="investmentAmount"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="e.g., 5000"
              min="100" // Example minimum investment
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="teslaModel">Select Tesla Model for reference cost:</label>
            <select
              id="teslaModel"
              value={selectedTeslaModel}
              onChange={(e) => setSelectedTeslaModel(e.target.value)}
              required
            >
              {Object.entries(TESLA_MODELS_COST).map(([key, model]) => (
                <option key={key} value={key}>
                  {model.name} (Base cost: €{model.cost.toLocaleString()})
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="calculate-button">Calculate</button>
        </form>

        {estimatedGrossReturn !== null && estimatedNetReturn !== null && (
          <div className="results-output">
            <h3>Estimated Monthly Returns:</h3>
            <p><strong>Estimated Gross Monthly Return:</strong> €{estimatedGrossReturn}</p>
            <p><strong>Estimated Net Monthly Return (after Carfli's 20% retention):</strong> €{estimatedNetReturn}</p>
            <p className="results-note">
              Note: Returns vary based on vehicle usage, demand, and city. This is an approximate calculation based on the selected model's reference cost and average fleet performance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
