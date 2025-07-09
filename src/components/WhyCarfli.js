import React from 'react';
import './WhyCarfli.css';
// Icons FaRocket, FaUsers, FaLeaf are removed as per the new design.

const WhyCarfli = () => {
  return (
    <div className="why-carfli-section">
      <div className="why-carfli-content">
        <h2>Why Carfli?</h2>
        <p className="explanation-text main-explanation">
          Discover the core advantages that position Carfli at the forefront of the evolving urban mobility landscape. We are committed to delivering a service that is not only technologically advanced but also user-centric and environmentally conscious.
        </p>

        <div className="paragraphs-container">
          <div className="paragraph-item">
            <h3 className="paragraph-subtitle">Pioneering Innovation</h3>
            <p className="paragraph-description">
              Carfli is at the cutting edge of autonomous vehicle technology. We are not just offering a ride; we are providing an entry into the future of transportation. Our fleet consists of state-of-the-art self-driving cars, designed for safety, efficiency, and comfort. By choosing Carfli, you are embracing innovation and becoming part of a movement that is actively reshaping how we navigate our cities. Experience the seamless integration of advanced AI and robotics into your daily commute.
            </p>
          </div>

          <div className="paragraph-item">
            <h3 className="paragraph-subtitle">Unparalleled Accessibility</h3>
            <p className="paragraph-description">
              We believe that the future of mobility should be open to everyone. Carfli introduces a unique model of participatory investment, allowing individuals to co-own parts of our autonomous fleet. This approach democratizes access to a high-growth industry, removing traditional barriers such as high upfront costs, commissions, or intermediaries. It’s an opportunity to not only use a revolutionary service but also to benefit financially from its success, fostering a community of stakeholders.
            </p>
          </div>

          <div className="paragraph-item">
            <h3 className="paragraph-subtitle">Commitment to Sustainability</h3>
            <p className="paragraph-description">
              Our vision for the future is green. Carfli is dedicated to reducing the carbon footprint of urban transportation. Our entire fleet of autonomous vehicles is electric, contributing to cleaner air and quieter streets. By optimizing routes and reducing the number of individually owned cars on the road, we aim to create a more efficient and environmentally friendly transport ecosystem. Join us in building a sustainable future, one ride at a time, and be part of the solution to urban pollution and congestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCarfli;
