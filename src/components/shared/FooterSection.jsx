import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h3 className="footer-title">Electronics Repair Garage</h3>
        <ul className="footer-contact">
          <li><span>📍</span> 250-997 Seymour St, PMB#1480, Vancouver BC V6B 3M1</li>
          <li><span>📞</span> (604) 600-0347</li>
          <li><span>📧</span> info@electronicsrepairgarage.ca</li>
          <li><span>⏰</span> Wed–Fri: 6:30pm–9=8:30pm</li>
        </ul>

        <div className="footer-icons">
          <div className="footer-icon">🌐</div>
          <div className="footer-icon">💼</div>
          <div className="footer-icon">📸</div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Electronics Repair Garage. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
