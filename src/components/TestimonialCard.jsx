import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ name, quote, rating }) {
  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">“{quote}”</div>
      <div className="testimonial-rating">{renderStars(rating)}</div>
      <div className="testimonial-name">— {name}</div>
    </div>
  );
}

export default TestimonialCard;
