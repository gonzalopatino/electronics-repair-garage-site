import React from 'react';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          With over a decade of experience, Electronics Repair Garage is committed to sustainability and precision repairs.
          We bring electronics back to life — responsibly and affordably.
        </p>
        <a href="/about" className="about-button">Learn More →</a>
      </div>
    </section>
  );
};

export default AboutPreview;
