import React, { useState, useEffect } from 'react';
import './InvestmentCalculator.css';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000); // Default investment
  const [selectedTeslaModel, setSelectedTeslaModel] = useState('model3');
  const [estimatedGrossReturn, setEstimatedGrossReturn] = useState(null);
  const [estimatedNetReturn, setEstimatedNetReturn] = useState(null);

  const TESLA_MODELS_COST = {
    model3: { name: 'Tesla Model 3', cost: 40000 },
    modelY: { name: 'Tesla Model Y', cost: 45000 },
    modelS: { name: 'Tesla Model S', cost: 75000 },
    modelX: { name: 'Tesla Model X', cost: 85000 },
  };
  const AVG_MONTHLY_PROFIT_PER_FULL_VEHICLE_SHARE = 300;
  const CARFLI_RETENTION_RATE = 0.20;

  useEffect(() => {
    const amount = parseFloat(investmentAmount);
    const modelData = TESLA_MODELS_COST[selectedTeslaModel];

    if (isNaN(amount) || amount <= 0 || !modelData) {
      setEstimatedGrossReturn(null);
      setEstimatedNetReturn(null);
      return;
    }

    const vehicleFraction = amount / modelData.cost;
    const grossReturn = vehicleFraction * AVG_MONTHLY_PROFIT_PER_FULL_VEHICLE_SHARE;
    const netReturn = grossReturn * (1 - CARFLI_RETENTION_RATE);

    setEstimatedGrossReturn(grossReturn.toFixed(2));
    setEstimatedNetReturn(netReturn.toFixed(2));
  }, [investmentAmount, selectedTeslaModel]);


  return (
    <div className="calculator-section investment-calculator">
      <div className="calculator-content">
        <h2>Investment Return Estimator</h2>
        <p className="calculator-description">
          Estimate your potential monthly return by investing in Carfli's Tesla fleet.
        </p>
        <div className="calculator-form"> {/* No form submission, live update */}
          <div className="form-group">
            <label htmlFor="investmentAmount">
              Amount to invest: <span className="slider-value-display">€{parseFloat(investmentAmount).toLocaleString()}</span>
            </label>
            <input
              type="range"
              id="investmentAmount"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              min="500" // Min investment
              max="50000" // Max investment for slider
              step="100" // Step amount
            />
          </div>
          <div className="form-group">
            <label htmlFor="teslaModel">Select Tesla Model for reference cost:</label>
            <select
              id="teslaModel"
              value={selectedTeslaModel}
              onChange={(e) => setSelectedTeslaModel(e.target.value)}
            >
              {Object.entries(TESLA_MODELS_COST).map(([key, model]) => (
                <option key={key} value={key}>
                  {model.name} (Base: €{model.cost.toLocaleString()})
                </option>
              ))}
            </select>
          </div>
          {/* Calculate button removed as it's live */}
        </div>

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
