import React, { useState } from 'react';
import './ServiceCard.css';

function ServiceCard({ title, description, icon, details }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const closeOverlay = (e) => {
    e.stopPropagation();
    setShowOverlay(false);
  };

  return (
    <div className="service-card" onClick={toggleOverlay}>
      {/* Base content */}
      <div className={`card-content ${showOverlay ? 'hidden' : ''}`}>
        <div className="service-icon">{icon}</div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="service-overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <p>{details}</p>
            <button className="close-btn" onClick={closeOverlay}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
