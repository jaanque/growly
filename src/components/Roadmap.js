import React from 'react';
import './Roadmap.css';
import { FaFlagCheckered, FaCity, FaRobot, FaUsers, FaRocket } from 'react-icons/fa';

const roadmapItems = [
  {
    icon: <FaFlagCheckered />,
    title: "Phase 1: Initial Launch",
    description: "Launch Carfli services with a fleet of advanced semi-autonomous Tesla vehicles in select pilot areas.",
    details: "Focus on refining operations, driver training, and user experience with existing Tesla Autopilot features."
  },
  {
    icon: <FaCity />,
    title: "Phase 2: City Expansion",
    description: "Expand operations to new target cities based on demand, regulatory environment, and infrastructure readiness.",
    details: "Scale the fleet and driver network while building local partnerships."
  },
  {
    icon: <FaRobot />,
    title: "Phase 3: Autonomous Integration",
    description: "Progressively integrate Level 4/5 fully autonomous driving technology into the fleet as it becomes viable and approved.",
    details: "Begin transitioning to driverless operations in controlled environments and expand as capabilities grow."
  },
  {
    icon: <FaUsers />,
    title: "Phase 4: Community & Fleet Growth",
    description: "Grow the co-investor community alongside the expanding autonomous fleet, enhancing shared ownership benefits.",
    details: "Introduce new investment opportunities and community engagement programs."
  },
];

const Roadmap = () => {
  return (
    <div className="roadmap-section">
      <div className="roadmap-content">
        <h2>Our Roadmap to the Future</h2>
        <p className="roadmap-intro">
          Carfli is on a mission to redefine urban mobility. Here’s a glimpse of our journey ahead:
        </p>
        <div className="roadmap-timeline">
          {roadmapItems.map((item, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-icon-container">
                <div className="roadmap-icon">{item.icon}</div>
                {index < roadmapItems.length - 1 && <div className="roadmap-line"></div>}
              </div>
              <div className="roadmap-item-content">
                <h3>{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="roadmap-vision-statement">
          <FaRocket className="vision-icon"/>
          <p>"The future is 100% autonomous and shared ownership. Join us in building it."</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
