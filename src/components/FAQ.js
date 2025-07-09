import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqDataNew = [
  {
    question: "How does the investment work?",
    answer: "You invest in a share of a Carfli vehicle or the fleet. As these vehicles generate revenue from rides, you receive a proportional share of the profits after operational costs and Carfli's commission. It's like owning a fraction of a taxi that drives itself (soon!)."
  },
  {
    question: "When will I receive my profits?",
    answer: "Profits are typically calculated and distributed on a monthly basis. You'll have access to a dashboard to track your vehicle's performance and your earnings."
  },
  {
    question: "What happens if a car gets damaged?",
    answer: "All Carfli vehicles are comprehensively insured. In case of damage, insurance covers the repairs. We also maintain a repair fund from a small percentage of earnings to cover minor incidents or deductibles, minimizing impact on investor returns."
  },
  {
    question: "What commissions does Carfli charge?",
    answer: "Carfli charges a service commission on ride fares and a management fee on investment returns. For drivers, our commission is significantly lower than traditional ride-sharing. For investors, we retain a percentage of the gross profit for fleet management, technology development, and operational overhead. Specific rates are detailed in your respective agreement."
  },
  {
    question: "When will you have fully autonomous driving?",
    answer: "We are launching with advanced semi-autonomous Tesla vehicles and are actively developing and integrating full Level 4/5 autonomous driving technology. We project to roll out fully autonomous capabilities in phases, city by city, as technology matures and regulations permit. Stay updated via our Roadmap!"
  },
  {
    question: "How is vehicle safety and insurance handled?",
    answer: "Safety is our top priority. Our vehicles are equipped with cutting-edge safety features. All vehicles are covered by comprehensive commercial auto insurance. For autonomous operations, we will secure specialized AV insurance policies that meet all regulatory requirements."
  }
];

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">
        <h3>{faq.question}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = index => {
    if (openFAQIndex === index) {
      setOpenFAQIndex(null);
    } else {
      setOpenFAQIndex(index);
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqDataNew.map((faq, index) => ( // Using faqDataNew
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
              isOpen={openFAQIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
