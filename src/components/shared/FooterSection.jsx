import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h3 className="footer-title">Electronics Repair Garage</h3>
        <ul className="footer-contact">
          <li><span>📍</span> Vancouver, BC</li>
          <li><span>📞</span> (123) 456-7890</li>
          <li><span>📧</span> contact@repairgarage.ca</li>
          <li><span>⏰</span> Mon–Fri: 9am – 6pm</li>
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
