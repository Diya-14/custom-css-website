import React, { useState } from 'react';
import '../styles/FAQ.css'; // Import CSS for styling

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Track which question is open

  // Toggle function to show/hide answers
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the same question or close it
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <h2>Is your makeup cruelty-free?</h2>
            <span>{openIndex === 0 ? '-' : '+'}</span> {/* Toggle icon */}
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
              <p>Yes, all our products are 100% cruelty-free. We are committed to ethical beauty and ensuring no harm is done to animals during production.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <h2>Do you offer free shipping?</h2>
            <span>{openIndex === 1 ? '-' : '+'}</span> {/* Toggle icon */}
          </div>
          {openIndex === 1 && (
            <div className="faq-answer">
              <p>We offer free shipping on orders over $50. For smaller orders, a standard shipping rate applies based on your location.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <h2>What is your return policy?</h2>
            <span>{openIndex === 2 ? '-' : '+'}</span> {/* Toggle icon */}
          </div>
          {openIndex === 2 && (
            <div className="faq-answer">
              <p>We accept returns within 30 days of purchase, provided the products are unused and in their original packaging. Please contact our support team for assistance.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <h2>Are your products vegan?</h2>
            <span>{openIndex === 3 ? '-' : '+'}</span> {/* Toggle icon */}
          </div>
          {openIndex === 3 && (
            <div className="faq-answer">
              <p>Many of our products are vegan, and we clearly label them on our packaging. Please refer to individual product descriptions for more information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
