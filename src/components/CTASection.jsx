import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Ready to get your electronics repaired?</h2>
      <p>Let’s bring your devices back to life — quickly, affordably, and responsibly.</p>
      <div className="cta-buttons">
        <a href="/quote" className="cta-btn">Request a Quote</a>
        <a href="/pickup" className="cta-btn outline">Schedule a Pickup</a>
      </div>
    </section>
  );
};

export default CTASection;
