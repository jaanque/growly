import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "How are earnings distributed?",
    answer: "Earnings are distributed proportionally based on your co-ownership stake in the vehicle fleet. The more you invest, the greater your share of the profits generated from rides."
  },
  {
    question: "How safe are the autonomous vehicles?",
    answer: "Our autonomous vehicles are equipped with state-of-the-art sensor suites, redundant safety systems, and advanced AI algorithms. They undergo rigorous testing and adhere to the highest industry safety standards to ensure passenger and public safety."
  },
  {
    question: "When will the service be available in my city?",
    answer: "Carfli is actively working on expanding its services. We prioritize cities with a forward-thinking approach to transportation and a clear regulatory framework. Sign up for our newsletter to receive the latest updates on our expansion and be notified when we launch near you."
  },
  {
    question: "What makes Carfli different from other ride-sharing services?",
    answer: "Carfli uniquely combines autonomous vehicle technology with a co-ownership model. This means not only do you get to experience the future of transport, but you can also invest and earn from it. Our focus is on sustainability, accessibility, and community-driven growth."
  },
  {
    question: "Can I choose the specific car I co-own?",
    answer: "While you invest in the overall fleet, specific vehicle assignment for co-ownership is managed by Carfli to optimize operational efficiency and earnings distribution. However, all vehicles in the fleet meet our high standards of quality and technology."
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
      setOpenFAQIndex(null); // Close if already open
    } else {
      setOpenFAQIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
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
