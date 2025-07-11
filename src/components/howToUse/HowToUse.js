import React from 'react';
import './HowToUse.css'; // We will create this CSS file next

function HowToUse() {
  const steps = [
    {
      id: 1,
      title: "Pas 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Pas 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Pas 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      title: "Pas 4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div id="how-to-use" className="HowToUse-section"> {/* Removed App-content class */}
      <div className="HowToUse-container">
        <h1 className="App-title HowToUse-title">Com Utilitzar l'App?</h1>
        <div className="HowToUse-steps-container">
          {steps.map(step => (
            <div key={step.id} className="HowToUse-step">
              <h3 className="HowToUse-step-title">{step.title}</h3>
              <p className="HowToUse-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
