import React, { useEffect, useState } from 'react';
import './HeroBanner.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const images = [img1, img2, img3];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-banner">
      <img src={images[current]} alt="Hero Slide" className="hero-image" />
      <div className="hero-overlay">
        <h1>ELECTRONICS REPAIR GARAGE</h1>
        <p>Smart • Sustainable • Reliable Electronics Repair</p>
        <div className="hero-buttons">
          <button>Request a Quote</button>
          <button>View Services</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
