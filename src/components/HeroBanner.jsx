import React from 'react';
import logo from '../assets/logo.png';
import '../components/HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-center">
        <div className="hero-logo-title">
          <img src={logo} alt="Logo" className="hero-logo" />
          <h1 className="hero-title">Electronics Repair Garage</h1>
        </div>
        <p className="hero-subtitle">Smart • Sustainable • Reliable Electronics Repair</p>
        <a href="/contact" className="hero-cta">Request a Quote</a>
      </div>
    </section>
  );
};

export default HeroBanner;
