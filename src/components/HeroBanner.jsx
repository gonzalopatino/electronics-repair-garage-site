import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <img
          src="/logo192.png"
          alt="Electronics Repair Garage Logo"
          className="hero-logo"
        />
        <h1 className="hero-title">ELECTRONICS REPAIR GARAGE</h1>
        <p className="hero-subtitle">
          Mobile Electronics Repair Service – Based in Vancouver, BC<br />
          Servicing Coquitlam
        </p>
        <p className="hero-note">
          No Walk-Ins. Pickup or Drop-Off by Appointment Only.<br />
          <strong>Flexible and Easy Scheduling Available – 604-600-0347</strong>
        </p>
        <a href="#contact" className="hero-cta">Get in Touch with Us</a>
      </div>
    </section>
  );
}

export default HeroBanner;
